import React, { useState } from "react";

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    { date: "2025-10-17", title: "Meeting with Team", description: "Project discussion at 10 AM" },
    { date: "2025-10-20", title: "Doctor Appointment", description: "Health checkup at 5 PM" },
    { date: "2025-10-20", title: "Friend's Birthday", description: "Party at 7 PM" },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthDays = [...Array(daysInMonth)].map((_, i) => i + 1);

  const handleDateClick = (day) => {
    const formatted = ${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")};
    setSelectedDate(formatted);
  };

  const selectedEvents = events.filter((e) => e.date === selectedDate);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>{today.toLocaleString("default", { month: "long" })} {year}</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "8px",
        maxWidth: "350px",
        margin: "auto",
      }}>
        {monthDays.map((day) => {
          const dayString = ${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")};
          const isSelected = selectedDate === dayString;
          return (
            <div
              key={day}
              onClick={() => handleDateClick(day)}
              style={{
                padding: "12px",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: isSelected ? "#4caf50" : "#f0f0f0",
                color: isSelected ? "white" : "black",
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Events on {selectedDate || "Select a date"}</h3>
        {selectedEvents.length ? (
          selectedEvents.map((event, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{event.title}</strong>
              <p>{event.description}</p>
            </div>
          ))
        ) : (
          selectedDate && <p>No events for this date.</p>
        )}
      </div>
    </div>
  );
}