export default function DayColumn() {
  return (
    <div className="bg-light-cream w-60 p-4 rounded-2xl flex flex-col m-3 gap-2">
      <h1 className="bg-warm-beige p-3 rounded-xl text-2xl w-full text-center">Monday</h1>
      <ul className="flex flex-col gap-2 w-full">
        <li className="bg-warm-beige p-3 w-full text-center rounded-xl">Breakfast</li>
        <li className="bg-warm-beige p-3 w-full text-center rounded-xl">Snack *optional*</li>
        <li className="bg-warm-beige p-3 w-full text-center rounded-xl">Lunch</li>
        <li className="bg-warm-beige p-3 w-full text-center rounded-xl">Snack *optional*</li>
        <li className="bg-warm-beige p-3 w-full text-center rounded-xl">Dinner</li>
      </ul>
    </div>
  );
}
