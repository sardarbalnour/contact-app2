function ContactsList({ contacts }) {
  return (
    <div>
      <h3>Contacts list</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}> {contact.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
