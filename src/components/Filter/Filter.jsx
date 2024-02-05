import { setFilterValue } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterContact = ({ target }) =>
    dispatch(setFilterValue(target.value));

  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="filter" onChange={e => handleFilterContact(e)} />
    </>
  );
};

export default Filter;
