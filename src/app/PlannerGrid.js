import DayColumn from "./DayColumn";

export default function PlannerGrid() {
  return (
    <div className="flex overflow-x-auto px-6 pb-1 m-5 rounded-xl shadow-lg bg-light-background">
      <DayColumn />
      <DayColumn />
      <DayColumn />
      <DayColumn />
      <DayColumn />
      <DayColumn />
      <DayColumn />
    </div>
  )
}