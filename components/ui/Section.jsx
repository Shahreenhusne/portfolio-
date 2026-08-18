const Section = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      style={{ scrollSnapAlign: "start" }}
      className={`flex min-h-screen w-full flex-col justify-center px-5 py-16 sm:px-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
