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

        className="after:bg-secondary text-medium-1 grid-style relative z-0 cursor-pointer p-2 after:absolute after:inset-0 after:-z-1 after:origin-left after:scale-x-0 after:rounded-md after:transition-transform hover:after:scale-x-100"
      >
        <div className="w-fit overflow-hidden rounded-md *:h-10 *:w-15">
          <img
            src={
              name === "Afghanistan"
                ? "https://wallpapercave.com/wp/wp4056551.jpg"
                : flags.png
            }
            alt={`${name} flag`}
          />
        </div>

        <span className="text-balance">{name}</span>

        <span className="hidden sm:block">{population.toLocaleString()}</span>

        <span className="hidden sm:block">
          {area ? area.toLocaleString() : "-"}
        </span>

        <span className="hidden xl:block">{region}</span>
      </Link>
    );
  }

  return <></>;
}
