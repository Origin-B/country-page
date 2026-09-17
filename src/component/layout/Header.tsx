export default function Header() {
  return (
    <header className="relative w-full">
      <img
        srcSet="/images/hero-image-sm.jpg 200w, /images/hero-image.jpg 600w"
        src="/images/hero-image-sm.jpg"
        alt="earth planet in the space"
      />

      <img
        src="/images/Logo.svg"
        alt="world ranks logo"
        className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:w-1/5"
      />
    </header>
  );
}
