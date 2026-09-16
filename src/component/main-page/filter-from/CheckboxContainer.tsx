// hooks
import { useCountries } from "../../../context/CountriesContextProvider";

// icons
import { DoneRound } from "../../../Icons";

export default function CheckboxContainer({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const { filter, handelFilter } = useCountries();

  return (
    <button
      className="flex-row-items-center gap-2xs w-fit text-start"
      aria-label={`click to make status ${title}`}
      onClick={() => handelFilter("status", id)}
    >
      <span
        id={id}
        className={`${filter.status === id && "bg-checkbox-accent"} border-text rounded-md border-2 transition-colors`}
      >
        <DoneRound
          className={`${filter.status === id ? "opacity-100" : "opacity-0"} opacity-0 transition-opacity`}
        />
      </span>

      <p>{title}</p>
    </button>
  );
}
