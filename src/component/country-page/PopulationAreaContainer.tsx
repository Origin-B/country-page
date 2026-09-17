export default function PopulationAreaContainer({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <p className="divide-primary bg-secondary py-xs text-medium-0.875 md:text-medium-0.75 flex divide-x-2 rounded-lg *:px-5">
      <span>{title}</span>
      <span className="flex-1 text-center">{value}</span>
    </p>
  );
}
