const FilterButton = ({ label, count, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "border-steel-500 bg-navy-800/60 text-frost-50"
          : "border-white/10 text-sky-100/50 hover:border-white/20 hover:text-sky-100"
      }`}
    >
      {label}
      <span
        className={`rounded px-1.5 py-0.5 text-xs ${
          isActive ? "bg-steel-500/20 text-sky-100" : "bg-white/5 text-sky-100/30"
        }`}
      >
        {count}
      </span>
    </button>
  );
};

export default FilterButton;
