// hooks
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useCountries } from "../../context/CountriesContextProvider";

// type
import { type Details } from "../../type-data";
import DetailsContainer from "./DetailsContainer";
import PopulationAreaContainer from "./PopulationAreaContainer";
import BorderCountry from "./BorderCountry";

export default function Country() {
  const { id } = useParams();
  const { countries } = useCountries();

  const country = useMemo(
    () => countries.find((country) => country.numericCode === id),
    [id, countries],
  );

  if (country) {
    const {
      flags,
      name,
      area,
      population,
      capital,
      subregion,
      region,
      currencies,
      languages,
      borders,
    } = country;

    const details: Details[] = [
      {
        id: 1,
        title: "capital",
        value: capital ? capital : "-",
      },
      {
        id: 2,
        title: "subregion",
        value: subregion,
      },
      {
        id: 3,
        title: "languages",
        value: languages.map((c) => c.name).join(", "),
      },
      {
        id: 4,
        title: "currencies",
        value: currencies ? currencies.map((c) => c.name).join(", ") : "-",
      },
      {
        id: 5,
        title: "continents",
        value: region,
      },
    ];

    return (
      <main className="lg:relative-style w-full md:w-4/5 lg:w-1/2">
        <section className="gap-base relative -top-6 flex flex-col md:-top-8 md:gap-8">
          <div className="w-1/2 max-w-75 self-center overflow-hidden rounded-lg">
            <img
              src={flags.png === "" ? flags.png : flags.svg}
              alt={`${name} flag`}
            />
          </div>

          <article className="self-center text-center">
            <h1 className="text-semibold-1">{name}</h1>
            <p>Republic of {name}</p>
          </article>

          <div className="gap-base px-sm flex flex-col justify-center sm:flex-row">
            <PopulationAreaContainer
              title="Population"
              value={population.toLocaleString()}
            />

            <PopulationAreaContainer
              title="Area (km²)"
              value={area ? area.toLocaleString() : "-"}
            />
          </div>

          <div className="divide-secondary border-y-secondary *:p-sm flex flex-col divide-y border-y">
            {details.map((d) => (
              <DetailsContainer key={d.id} details={d} />
            ))}
          </div>
          {borders ? (
            <div className="px-sm gap-sm flex flex-col">
              <h2 className="text-medium-0.875">Neighboring Countries</h2>

              <div className="gap-sm flex flex-wrap justify-center sm:justify-start">
                {countries
                  .filter((c) => borders.some((b) => b === c.alpha3Code))
                  .map((country) => (
                    <Link
                      to={`/country/${country.numericCode}?name=${country.name}`}
                      key={country.numericCode}
                      aria-label={`Click to show ${country.name} details`}
                      className="p-sm hover:bg-secondary w-25 rounded-lg transition-colors"
                      onClick={() => scrollTo(0, 0)}
                    >
                      <BorderCountry borderCountry={country} />
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
      </main>
    );
  }
}
