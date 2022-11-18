import { WrapperFilter } from './FilterInput.styled';
import { addFilterValue } from '../../redux/filterSlice';

import { useDispatch } from 'react-redux';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(addFilterValue(e.target.value));
  };
  return (
    <WrapperFilter>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        autoComplete="off"
      />
    </WrapperFilter>
  );
};
