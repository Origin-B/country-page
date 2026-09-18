export default function ImgContainer({
  className,
  png,
  name,
}: {
  className: string;
  png: string;
  name: string;
}) {
  return (
    <div className={className}>
      <img
        src={
          name === "Afghanistan"
            ? "https://wallpapercave.com/wp/wp4056551.jpg"
            : png
        }
        alt={`${name} flag`}
      />
    </div>
  );
}
