import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  select,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <input
        type="time"
        name="time"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <ContactPicker
        contacts={contacts}
        contact={contact}
        setContact={setContact}
        select={select}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
