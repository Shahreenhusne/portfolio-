import ProgressBar from "@/components/ui/ProgressBar";

const SkillRow = ({ name, level }) => {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs text-sky-100/80 sm:text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <ProgressBar value={level} />
    </div>
  );
};

export default SkillRow;
