import DayColumn from "./DayColumn";

export default function PlannerGrid() {
  return (
    <div className="flex overflow-x-auto p1-6 pb-1">
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