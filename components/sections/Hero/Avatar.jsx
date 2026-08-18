const Avatar = ({ initials }) => {
  return (
    <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-steel-500 via-sky-100 to-navy-800 opacity-80 blur-md" />
      <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-sky-100/40 bg-navy-950">
        <span className="bg-gradient-to-br from-frost-50 to-sky-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          {initials}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
