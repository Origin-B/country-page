import type { Country } from "../../type-data";

// component
import { Link } from "react-router-dom";
export default function BorderCountry({
  borderCountry,
}: {
  borderCountry: Country;
}) {
  const {
    numericCode,
    name,
    flags: { png },
  } = borderCountry;

  return (
    <Link
      to={`/country/${numericCode}?name=${name}`}
      aria-label={`Click to show ${name} details`}
      className="p-sm hover:bg-secondary gap-xs flex size-full w-22 flex-col overflow-hidden rounded-lg transition-colors"
      onClick={() => scrollTo(0, 0)}
    >
      <div className="w-fit overflow-hidden rounded-md bg-amber-900 *:h-10 *:w-15">
        <img
          src={
            name === "Afghanistan"
              ? "https://wallpapercave.com/wp/wp4056551.jpg"
              : png
          }
          alt={`${borderCountry.name} flag `}
        />
      </div>

      <h3 className="text-medium-0.75 max-w-[25ch] overflow-hidden text-nowrap text-ellipsis">
        {name}
      </h3>
    </Link>
  );
}
