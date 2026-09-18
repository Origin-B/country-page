// icon
import { Search } from "../../Icons";

// hooks
import { useCountries } from "../../context/CountriesContextProvider";

export default function SearchFilter() {
  const { filter, handelFilter, filteredCountries } = useCountries();

  const totalResults = filteredCountries.length;

  return (
    <div className="gap-sm flex flex-wrap items-center justify-between *:w-full *:md:w-fit">
      <p className="text-medium-1">Found {totalResults} countries</p>

      <div className="bg-p-rounded has-focus:outline-skeleton gap-2xs flex-row-items-center has-focus:outline-1">
        <Search />

        <input
          type="text"
          className="text-medium-0.875 placeholder:text-text text-nowrap text-ellipsis focus:outline-none md:w-75"
          placeholder="Search by Name, Region, Subregion"
          value={filter.query}
          onChange={(e) => handelFilter("query", e.target.value)}
        />
      </div>
    </div>
  );
}
