import DayColumn from "./DayColumn";

export default function PlannerGrid() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex overflow-x-auto px-6 pb-1 m-5 rounded-xl shadow-2xl bg-light-background">
      {days.map((day) => (
        <DayColumn key={day} day={day} />
      ))}
    </div>
  );
}
