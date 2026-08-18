const ActivityCard = ({ activity }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950/40 p-5 sm:p-6">
      <h3 className="text-base font-bold text-frost-50 sm:text-lg">{activity.title}</h3>
      <p className="mt-1 text-sm font-medium text-steel-500">
        {activity.role} · {activity.startDate}
        {activity.endDate ? `–${activity.endDate}` : ""}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-sky-100/60">{activity.description}</p>
      {activity.badge && (
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center rounded-md border border-white/10 px-2.5 py-1 text-xs text-sky-100/50">
            {activity.badge}
          </span>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
