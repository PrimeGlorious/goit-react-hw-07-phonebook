import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import {ContactsLabel, ContactsInput} from './Filter.styled'

function Filter() {
  const dispatch = useDispatch();
  const inputValue = evt => {
    const value = evt.target.value;
    dispatch(setFilter(value));
  };

  return (
    <ContactsLabel>
      Find contacts by name
      <ContactsInput
        name="filter"
        onChange={inputValue}
        type="text"
      ></ContactsInput>
    </ContactsLabel>
  );
}

export { Filter };
