import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactsTitle } from './App.styled';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <ContactsTitle>Phonebook</ContactsTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
}

export { App };
