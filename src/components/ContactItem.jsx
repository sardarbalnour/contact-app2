function ContactItem({
  data: { id, name, email, lastName, phoneNumber },
  deleteHandler,
}) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span> {email}
      </p>
      <p>
        <span>☎️</span> {phoneNumber}
      </p>
      <button onClick={deleteHandler}>🗑️</button>
    </li>
  );
}

export default ContactItem;
