import { ContactsData } from './contactsData';

const ContactsBlock = (contacts: ContactsData): JSX.Element => {
  return (
    <>
      <div className="contacts-tel">{contacts.tel}</div>
      <div className="contacts-email">{contacts.email}</div>
      <div className="contacts-location">{contacts.location}</div>
    </>
  );
};

export default ContactsBlock;
