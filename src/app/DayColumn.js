export default function DayColumn() {
  return (
    <div className=" w-60 p-4 rounded-2xl flex flex-col m-3 gap-2">
      <h1 className="p-3 rounded-xl text-2xl font-bold w-full text-center">Monday</h1>
      <ul className="flex flex-wrap justify-center gap-2 w-full">
        <li className="bg-warm-beige border border-gray-300 p-3 w-full text-center rounded-xl">Breakfast</li>
        <li className="bg-warm-beige border border-gray-300 p-3 w-full text-center rounded-xl">Snack *optional*</li>
        <li className="bg-warm-beige border border-gray-300 p-3 w-full text-center rounded-xl">Lunch</li>
        <li className="bg-warm-beige border border-gray-300 p-3 w-full text-center rounded-xl">Snack *optional*</li>
        <li className="bg-warm-beige border border-gray-300 p-3 w-full text-center rounded-xl">Dinner</li>
      </ul>
      <button className="bg-warm-button border border-gray-300 p-3 rounded-xl">+ Add meal</button>
    </div>
  );
}
