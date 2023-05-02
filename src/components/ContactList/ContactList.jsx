import { Li, Ul, P, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Ul>
    {contacts.map(({ id, name, phone }) => (
      <Li key={id}>
        <P>
          {name}: {phone}
        </P>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Li>
    ))}
  </Ul>
);

export default ContactList;
