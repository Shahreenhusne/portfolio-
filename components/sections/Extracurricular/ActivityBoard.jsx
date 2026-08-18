"use client";

import { useMemo, useState } from "react";
import FilterButton from "./FilterButton";
import ActivityCard from "./ActivityCard";

const ActivityBoard = ({ activities }) => {
  const categories = useMemo(() => {
    const counts = new Map();
    activities.forEach((activity) => {
      counts.set(activity.category, (counts.get(activity.category) || 0) + 1);
    });
    return Array.from(counts.entries()).map(([name, count]) => ({ name, count }));
  }, [activities]);

  const [active, setActive] = useState("All");

  const filtered = active === "All" ? activities : activities.filter((a) => a.category === active);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        <FilterButton
          label="All"
          count={activities.length}
          isActive={active === "All"}
          onClick={() => setActive("All")}
        />
        {categories.map(({ name, count }) => (
          <FilterButton
            key={name}
            label={name}
            count={count}
            isActive={active === name}
            onClick={() => setActive(name)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {filtered.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityBoard;
