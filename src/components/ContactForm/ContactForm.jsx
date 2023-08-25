import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContact } from '../../redux/operations';
import { getContactsList } from 'redux/selectors';
import {PhonebookForm, PhonebookLabel, PhonebookInput, PhonebookBtn} from './ContactForm.styled'

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  const addContacts = (name, number) => {
    const allNames = contacts.map(contact => contact.name);
    const currentName = name;
    const currentNumber = number;
    if (!allNames.includes(currentName)) {
      dispatch(
        addContact({
          name: currentName,

          number: currentNumber,
        })
      );
      dispatch(getContacts());
    } else {
      alert(`${currentName} already added!  `);
    }
  };

  const inputValue = evt => {
    const key = evt.target.name;
    const value = evt.target.value;

    switch (key) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    const currentName = evt.target.elements.name.value;
    const currentNumber = evt.target.elements.number.value;
    addContacts(currentName, currentNumber);
    setName('');
    setNumber('');
  };

  return (
    <PhonebookForm onSubmit={onSubmitForm}>
      <PhonebookLabel>
        Name
        <PhonebookInput
          onChange={inputValue}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel>
        Number
        <PhonebookInput
          value={number}
          onChange={inputValue}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookBtn type="submit">
        Add contact
      </PhonebookBtn>
    </PhonebookForm>
  );
}

export { ContactForm };
