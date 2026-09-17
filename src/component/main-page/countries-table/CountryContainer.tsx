// component
import { Link } from "react-router-dom";

// type
import type { Country } from "../../../type-data";

export default function CountryContainer({ country }: { country: Country }) {
  if (country) {
    const { flags, population, area, region, name } = country;
    return (
      <Link
        to={`/country/${country.numericCode}?name=${name}`}
        aria-label={`Click to show ${country.name} details`}
      >
        <div className="after:bg-secondary gap-base relative z-0 grid cursor-pointer grid-cols-2 grid-rows-[auto] items-center p-2 after:absolute after:inset-0 after:-z-1 after:origin-left after:scale-x-0 after:rounded-md after:transition-transform hover:after:scale-x-100 sm:grid-cols-4 xl:grid-cols-5">
          <div className="w-3/4 overflow-hidden rounded-lg">
            <img
              src={flags.png === "" ? flags.png : flags.svg}
              alt={`${name} flag`}
              className=""
            />
          </div>
          <span className="text-balance">{name}</span>
          <span className="hidden sm:block">{population.toLocaleString()}</span>
          <span className="hidden sm:block">
            {area ? area.toLocaleString() : "-"}
          </span>
          <span className="hidden xl:block">{region}</span>
        </div>
      </Link>
    );
  }

  return <></>;
}
