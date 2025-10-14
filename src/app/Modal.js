export default function Modal(props) {
  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center min-h-screen">
      <div className="bg-light-background p-6 flex flex-col items-center rounded-2xl w-60">
        <h1 className="text-3xl mb-5">Add meal</h1>
        <div className="flex flex-col items-center">
          <form action="" className="flex flex-col items-center">
            <label htmlFor="meal" className="text-xl">
              Meal name
            </label>
            <input
              type="text"
              name="meal"
              id="meal"
              required
              className="shadow-inner p-2 my-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <label htmlFor="mealtype" className="text-xl">
              Meal type
            </label>
            <select
              name="mealtype"
              id="mealtype"
              className="border border-gray-300 w-full py-1 my-2 rounded-lg text-center"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Midday snack">Midday snack</option>
              <option value="Lunch">Lunch</option>
              <option value="Afternoon snack">Afternoon snack</option>
              <option value="Dinner">Dinner</option>
            </select>
          </form>
          <div className="flex gap-4 w-full">
            <button
              onClick={props.handleClose}
              className="flex-1 bg-warm-button hover:bg-warm-beige border-1 border-gray-300 px-5 py-2 mt-5 rounded-xl cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={props.handleClose}
              className="flex-1 bg-warm-button hover:bg-warm-beige border-1 border-gray-300 px-5 py-2 mt-5 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
