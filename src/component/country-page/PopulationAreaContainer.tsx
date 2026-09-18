export default function PopulationAreaContainer({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <p className="divide-primary bg-secondary py-xs flex items-center divide-x-2 rounded-lg *:px-5">
      <span className="text-medium-0.875">{title}</span>
      <span className="text-medium-1 flex-1 text-center">{value}</span>
    </p>
  );
}
