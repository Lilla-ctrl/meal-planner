"use client";

import { useState } from "react";
import DayColumn from "./DayColumn";
import Modal from "./Modal";

export default function PlannerGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [mealForDay, setMealForDay] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  function handleSave(selectedDay, mealData) {
    const meals = { ...mealForDay };
    meals[selectedDay] = [...meals[selectedDay], mealData];
    setMealForDay(meals);
    setModalOpen(false);
  }

  return (
    <>
      {modalOpen && (
        <Modal
          handleSave={handleSave}
          handleClose={handleClose}
          selectedDay={selectedDay}
        />
      )}
      <div className="flex overflow-x-auto px-6 pb-1 m-5 rounded-xl shadow-2xl bg-light-background">
        {days.map((day) => (
          <DayColumn key={day} day={day} handleOpen={handleOpen} />
        ))}
      </div>
    </>
  );
}
