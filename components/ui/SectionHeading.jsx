const SectionHeading = ({ prefix, title, subtitle, align = "left" }) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-xl font-semibold text-frost-50 sm:text-2xl">
        {prefix && `${prefix} `}
        <span className="bg-gradient-to-r from-steel-500 to-sky-100 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="mt-1 text-sm text-sky-100/60">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
