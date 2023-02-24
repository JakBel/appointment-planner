import React from "react";

export const ContactPicker = ({ contacts, contact, setContact, select }) => {
  return (
    <select onChange={(e) => setContact(e.target.value)} ref={select} required>
      <option value={contact} key="default" defaultValue="default">
        Wybierz kontakt
      </option>
      {contacts.map((val, index) => {
        return (
          <option value={val.name} key={index}>
            {val.name}
          </option>
        );
      })}
    </select>
  );
};
