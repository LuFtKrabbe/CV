import { useContext } from 'react';

import { langContext } from '../../language/langContext';
import { Languages } from '../../types/enums';

import { ContactsData } from './contactsData';

const ContactsBlock = (contacts: Record<Languages, ContactsData>): JSX.Element => {
  const {
    state: { language },
  } = useContext(langContext);

  return (
    <>
      <div className="contacts-tel">{contacts[language].tel}</div>
      <div className="contacts-email">{contacts[language].email}</div>
      <div className="contacts-location">{contacts[language].location}</div>
    </>
  );
};

export default ContactsBlock;
