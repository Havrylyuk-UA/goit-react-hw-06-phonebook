import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

const ContactListItem = () => {
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const filteredContactList = filter
    ? contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      {filteredContactList.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            className="delete-btn"
            onClick={() => handleRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactListItem;
