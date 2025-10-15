import MealCard from "./MealCard";

export default function DayColumn({day, handleOpen, meals}) {
  
  return (
    <div className=" w-60 p-4 rounded-2xl flex flex-col m-3 gap-2">
      <h1 className="p-3 rounded-xl text-2xl font-bold w-full text-center">{day}
        </h1>
      <div className="flex flex-wrap justify-center gap-2 w-full">
          <MealCard />     
      </div>
      <button onClick={() => handleOpen(day)} className="bg-warm-button border border-gray-300 p-3 rounded-xl">+ Add meal</button>
    </div>
  );
}
