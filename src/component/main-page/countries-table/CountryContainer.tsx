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
        className="w-full"
      >
        <div className="after:bg-secondary relative z-0 flex cursor-pointer items-center gap-4 p-2 *:w-1/2 after:absolute after:inset-0 after:-z-1 after:origin-left after:scale-x-0 after:rounded-md after:transition-transform hover:after:scale-x-100 *:sm:w-1/4 *:xl:w-1/5">
          <div>
            <img
              src={flags.svg}
              alt={`${name} flag`}
              className="h-15 w-1/2 overflow-hidden rounded-md"
            />
          </div>
          <span className="max-w-[15ch] text-balance">{name}</span>
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
