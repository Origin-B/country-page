// icon
import { ExpandDown } from "../../../Icons";

// data
import { regions, sort } from "../../../type-data";

// component
import CheckboxContainer from "./CheckboxContainer";
import FilterParagraph from "./FilterParagraph";

// hooks
import { useState } from "react";
import { useCountries } from "../../../context/CountriesContextProvider";

export default function FilterFrom() {
  const [active, setActive] = useState(false);

  const { filter, handelFilter } = useCountries();

  return (
    <section className="relative">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="gap-xs *:gap-xs sticky top-5 left-0 flex w-full flex-col *:flex *:flex-col"
      >
        <div className="focus:outline-skeleton relative">
          <FilterParagraph title="Sort by" />

          <button
            type="button"
            className="border-rounded p-xs flex items-center justify-between"
            onClick={() => setActive(!active)}
            aria-label="click to open sort menu"
          >
            <span>{filter.sort}</span>

            <ExpandDown
              className={`${active && "rotate-180"} transition-transform`}
            />
          </button>

          <div
            className={`${active ? "h-75" : "h-0"} absolute top-[120%] left-0 w-full overflow-hidden transition-[height]`}
          >
            <ul className="gap-sm p-xs border-rounded bg-primary flex w-full flex-col text-start">
              {sort.map((s) => (
                <li key={s.id}>
                  <button
                    aria-label={`click to sort with ${s.sort}`}
                    onClick={() => handelFilter("sort", s.sort)}
                    className={`${filter.sort !== s.sort && "text-text/50"} text-start`}
                  >
                    {s.sort}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <FilterParagraph title="Region" />

          <ul className="gap-sm text-medium-1 flex flex-wrap">
            {regions.map((r) => (
              <li key={r.id}>
                <button
                  aria-label={`click to add or remove ${r.region} to region filter`}
                  onClick={() => handelFilter("regions", r.region)}
                  className={`${filter.regions.some((region) => region === r.region) && "bg-secondary"} rounded-xl p-2`}
                >
                  {r.region}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FilterParagraph title="Status" />
          <CheckboxContainer id="united" title="Member of the United Nations" />
          <CheckboxContainer id="independent" title="Independent" />
        </div>
      </form>
    </section>
  );
}
