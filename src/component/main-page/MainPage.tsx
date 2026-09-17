import CountriesTable from "./countries-table/CountriesTable";
import FilterFrom from "./filter-from/FilterFrom";
import SearchFilter from "./SearchFilter";

export default function MainPage() {
  return (
    <main className="relative-style p-xs grid w-[95%] gap-[1rem_2rem] lg:grid-cols-[repeat(3,1fr)] lg:grid-rows-[auto_1fr]">
      <SearchFilter />
      <FilterFrom />
      <CountriesTable />
    </main>
  );
}
