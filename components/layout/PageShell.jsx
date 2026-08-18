import Sidebar from "@/components/layout/Sidebar/Sidebar";

const PageShell = ({ children }) => {
  return (
    <div className="flex w-full items-start bg-navy-800/40 shadow-glow backdrop-blur-xl">
      <div className="sticky top-[50vh] z-20 ml-3 shrink-0 -translate-y-1/2 sm:ml-6 lg:ml-10">
        <Sidebar />
      </div>
      <div className="min-w-0 flex-1 divide-y divide-white/10">{children}</div>
    </div>
  );
};

export default PageShell;
