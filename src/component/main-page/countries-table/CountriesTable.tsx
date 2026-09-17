// hooks
import { useCountries } from "../../../context/CountriesContextProvider";

// component
import CountryContainer from "./CountryContainer";
import CountrySkeleton from "./CountrySkeleton";

export default function CountriesTable() {
  const { filteredCountries } = useCountries();

  return (
    <section className="gap-base flex flex-col lg:col-span-2">
      <div className="border-secondary text-medium-0.875 flex justify-between border-b-2 py-4 *:w-1/2 *:sm:w-1/4 *:xl:w-1/5">
        <span>Flag</span>
        <span>Name</span>
        <span className="hidden sm:block">Population</span>
        <span className="hidden sm:block">Area (km²)</span>
        <span className="hidden xl:block">Region</span>
      </div>

      <div className="gap-sm scrollbar-thumb-secondary flex max-h-300 scrollbar-thin flex-col overflow-y-auto">
        {filteredCountries.length === 0
          ? Array.from({ length: 25 }).map((_, i) => (
              <CountrySkeleton key={i} />
            ))
          : filteredCountries.map((country) => (
              <CountryContainer
                key={`${country.numericCode}`}
                country={country}
              />
            ))}
      </div>
    </section>
  );
}
