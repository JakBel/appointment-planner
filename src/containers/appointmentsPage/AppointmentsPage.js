import React, { useState, useRef } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, onAddApp, contacts }) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const select = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      contact,
      date,
      time,
    };

    onAddApp(obj);

    setTitle("");
    setContact("Wybierz kontakt");
    setDate("");
    setTime("");
    select.current.value = "default";
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          select={select}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={appointments} />
      </section>
    </div>
  );
};
