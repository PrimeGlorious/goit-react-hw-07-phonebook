import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/operations';
import { getContactsList } from 'redux/selectors';
import { ContactsTitle } from './App.styled';

function App() {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);


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
