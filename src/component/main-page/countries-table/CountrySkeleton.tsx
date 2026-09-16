export default function CountrySkeleton() {
  return (
    <div className="after:bg-secondary relative z-0 flex cursor-pointer items-center gap-4 p-2 *:w-1/2 after:absolute after:inset-0 after:-z-1 after:origin-left after:scale-x-0 after:rounded-md after:transition-transform hover:after:scale-x-100 *:sm:w-1/4 *:xl:w-1/5">
      <p>
        <span className="bg-skeleton block h-15 w-1/2 animate-pulse overflow-hidden rounded-md" />
      </p>
      <p>
        <span className="bg-skeleton block h-5 w-4/5 animate-pulse rounded-full" />
      </p>
      <p className="hidden sm:block">
        <span className="bg-skeleton block h-5 w-4/5 animate-pulse rounded-full" />
      </p>
      <p className="hidden sm:block">
        <span className="bg-skeleton block h-5 w-4/5 animate-pulse rounded-full" />
      </p>
      <p className="hidden xl:block">
        <span className="bg-skeleton block h-5 w-4/5 animate-pulse rounded-full" />
      </p>
    </div>
  );
}
