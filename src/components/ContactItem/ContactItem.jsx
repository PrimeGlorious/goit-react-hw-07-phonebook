import PropTypes from 'prop-types';
import {ContactsItem, ContactsBtn} from './ContactItem.styled'

function ContactItem({ id, name, number, onDeleteBtn }) {
  return (
    <ContactsItem>
      <p>{name}:</p>
      <p>{number}</p>
      <ContactsBtn
        onClick={() => {
          onDeleteBtn(id);
        }}
        type="button"
        id={id}
      >
        Delete
      </ContactsBtn>
    </ContactsItem>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),

  onDeleteBtn: PropTypes.func.isRequired,
};

export { ContactItem };
