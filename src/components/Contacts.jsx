import { useState } from "react";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";



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
        {inputs.map((input,index) => (
          <input
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            key={index}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
