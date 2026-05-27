import { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phoneNumber
    ) {
      setAlert("Please enter valid data !");
      return;
    }

    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={contact.name}
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          placeholder="Last name"
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          type="number"
          name="phoneNumber"
          value={contact.phoneNumber}
          placeholder="Phone number"
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
