function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path
        d="M20 20L17 17"

        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExpandDown({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path d="M12 6L8 10L4 6" strokeWidth="2" />
    </svg>
  );
}

function DoneRound({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { DoneRound, ExpandDown, Search };
