const ProgressBar = ({ value }) => {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-950/60">
      <div
        className="h-full rounded-full bg-gradient-to-r from-steel-500 to-sky-100"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
};

export default ProgressBar;
