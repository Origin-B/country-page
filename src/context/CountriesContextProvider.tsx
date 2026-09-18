import {
  useContext,
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useMemo,
} from "react";
import type { Filter, Country } from "../type-data";

const countriesContext = createContext<{
  filter: Filter;
  handelFilter: (
    key: "query" | "regions" | "sort" | "status",
    value: string,
  ) => void;
  countries: Country[];
  filteredCountries: Country[];
}>({
  filter: {
    query: "",
    regions: [],
    sort: "",
    status: "",
  },

  handelFilter: () => console.log(),
  countries: [],
  filteredCountries: [],
});

export default function CountriesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>({
    query: "",
    regions: [],
    sort: "population",
    status: "",
  });

  const [countries, setCountries] = useState<Country[]>([]);

  function handelFilter(
    key: "query" | "regions" | "sort" | "status",
    value: string,
  ) {
    if (key === "regions") {
      setFilter({
        ...filter,
        regions: filter.regions.every((r) => r !== value)
          ? [...filter.regions, value]
          : filter.regions.filter((r) => r !== value),
      });
    } else {
      setFilter((prev: Filter) => {
        return { ...prev, [key]: value };
      });
    }
  }

  async function fetchCountries() {
    try {
      const data = await fetch("https://countries.dev/countries", {
        method: "GET",
      });
      if (!data.ok) {
        throw new Error("there is no data found");
      }

      const respond = await data.json();

      setCountries(respond);
    } catch (error) {
      return [];
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    const { query, regions, sort, status } = filter;

    if (!countries) return [];
    return countries
      .filter((country) =>
        query === ""
          ? true
          : country.name.toLowerCase().includes(query.toLowerCase().trim()) ||
            country.subregion
              .toLowerCase()
              .includes(query.toLowerCase().trim()) ||
            country.region.toLowerCase().includes(query.toLowerCase().trim()),
      )
      .filter((country) =>
        regions.length === 0 ? true : regions.some((r) => r === country.region),
      )
      .filter((country) =>
        status === ""
          ? true
          : status === "independent"
            ? country.independent
            : !country.independent,
      )
      .sort((a, b) =>
        sort === "population"
          ? b.population - a.population
          : Number(b.area) - Number(a.area),
      );
  }, [filter, countries]);

  return (
    <countriesContext.Provider
      value={{ filter, handelFilter, countries, filteredCountries }}
    >
      {children}
    </countriesContext.Provider>
  );
}

const useCountries = () => useContext(countriesContext);

export { useCountries };
