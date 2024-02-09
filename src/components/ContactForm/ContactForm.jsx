import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

import { addContact } from '../../redux/operations';

import './ContactForm.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handlePushForm = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    if (contacts && contacts.some(item => item.name === name)) {
      return alert(`${name} is already in contact!`);
    }

    dispatch(addContact({ name, phone }));
    resetForm(form);
  };

  const resetForm = form => {
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  return (
    <>
      <form onSubmit={handlePushForm}>
        <label>
          <legend>Name</legend>
          <input type="text" name="name" required />
        </label>
        <label>
          <legend>Number</legend>
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
