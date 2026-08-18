const variants = {
  primary:
    "bg-gradient-to-r from-steel-500 to-navy-800 text-frost-50 shadow-glow hover:brightness-110",
  outline:
    "border border-sky-100/30 text-sky-100 hover:border-sky-100/60 hover:bg-navy-800/60",
};

const Button = ({ as: Tag = "button", variant = "primary", className = "", children, ...props }) => {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
