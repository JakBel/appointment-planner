import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      const obj = {
        name,
        phone,
        email,
      };
      props.onAddCon(obj);

      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const check = props.contacts.some((el) => el.name === name);
    if (check === true) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, props.contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate && <p>Duplicated contact's name, change it!</p>}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
