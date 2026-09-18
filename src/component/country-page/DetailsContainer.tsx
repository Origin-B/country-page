// type
import type { Details } from "../../type-data";

export default function DetailsContainer({ details }: { details: Details }) {
  const { title, value } = details;

  return (
    <p className="gap-base text-medium-0.875 flex justify-between">
      <span>{title}</span>
      <span>{value}</span>
    </p>
  );
}
