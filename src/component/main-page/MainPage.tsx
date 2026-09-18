import CountriesTable from "./countries-table/CountriesTable";
import FilterFrom from "./filter-from/FilterFrom";
import SearchFilter from "./SearchFilter";

export default function MainPage() {
  return (
    <main className="relative-style p-sm gap-base flex w-[95%] flex-col lg:p-8">
      <SearchFilter />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_3fr]">
        <FilterFrom />
        <CountriesTable />
      </div>
    </main>
  );
}
