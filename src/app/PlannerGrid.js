"use client";

import { useState } from "react";
import DayColumn from "./DayColumn";

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

  function onClick() {
    setModalOpen(true);
  }

  return (
    <div className="flex overflow-x-auto px-6 pb-1 m-5 rounded-xl shadow-2xl bg-light-background">
      {days.map((day) => (
        <DayColumn key={day} day={day} onClick={onClick} />
      ))}
    </div>
  );
}
