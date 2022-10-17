import PropTypes from 'prop-types';
import { WrapperFilter } from './FilterInput.styled';

export const FilterInput = ({ handleChange }) => {
  return (
    <WrapperFilter>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </WrapperFilter>
  );
};

FilterInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
