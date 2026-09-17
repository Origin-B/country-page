import type { Country } from "../../type-data";

export default function BorderCountry({
  borderCountry,
}: {
  borderCountry: Country;
}) {
  return (
    <div className="gap-xs flex size-full flex-col">
      <img
        src={
          borderCountry.flags.png === ""
            ? borderCountry.flags.png
            : borderCountry.flags.svg
        }
        alt={`${borderCountry.name} flag `}
        className="h-12 w-full rounded-md"
      />

      <h3 className="text-medium-0.75 max-w-[25ch] overflow-hidden text-center text-nowrap text-ellipsis">
        {borderCountry.name}
      </h3>
    </div>
  );
}
