const IdentitySection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen gap-6 py-20 px-6">
      <img src="http://placehold.co/200x200?text=Logo" className="rounded-full" alt="Logo" />
      <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl overflow-y-hidden">
        UNA.{" "}
        <span
          className="font-bold leading-tight
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              bg-primary-gradient bg-clip-text text-transparent"
        >
          United.
        </span>
      </h1>
    </section>
  );
};

export default IdentitySection;
