// hooks
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../../context/CountriesContextProvider";

// type
import { type Details } from "../../type-data";

// component
import DetailsContainer from "./DetailsContainer";
import PopulationAreaContainer from "./PopulationAreaContainer";
import BorderCountry from "./BorderCountry";
import ImgContainer from "../shared/ImgContainer";

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
        title: "Capital",
        value: capital ? capital : "-",
      },
      {
        id: 2,
        title: "Subregion",
        value: subregion,
      },
      {
        id: 3,
        title: "Languages",
        value: languages.map((c) => c.name).join(", "),
      },
      {
        id: 4,
        title: "Currencies",
        value: currencies ? currencies.map((c) => c.name).join(", ") : "-",
      },
      {
        id: 5,
        title: "Continents",
        value: region,
      },
    ];

    return (
      <main className="lg:relative-style w-full shadow-md md:w-4/5 lg:w-[70%] lg:shadow-black/20 xl:w-1/2">
        <section className="gap-base relative -top-6 flex flex-col md:-top-8 md:gap-8">
          <ImgContainer
            className="w-1/2 max-w-75 self-center overflow-hidden rounded-lg"
            name={name}
            png={flags.png}
          />

          <article className="self-center text-center">
            <h1 className="text-semibold-2">{name}</h1>
            <p className="text-medium-1">Republic of {name}</p>
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

          <div className="divide-secondary text-medium-1 border-y-secondary *:p-sm flex flex-col divide-y border-y">
            {details.map((d) => (
              <DetailsContainer key={d.id} details={d} />
            ))}
          </div>
          {borders && (
            <div className="px-sm gap-sm flex flex-col">
              <h2 className="text-medium-0.875">Neighboring Countries</h2>

              <div className="gap-sm flex flex-wrap justify-center sm:justify-start">
                {countries
                  .filter((c) => borders.some((b) => b === c.alpha3Code))
                  .map((country) => (
                    <BorderCountry
                      key={country.numericCode}
                      borderCountry={country}
                    />
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>
    );
  }
}
