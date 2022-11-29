import { addFilterValue } from '../../redux/filter/slice';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(addFilterValue(e.target.value));
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      name="filter"
      onChange={handleChange}
    >
      <TextField
        size="small"
        id="filter contacts"
        label="filter contacts"
        variant="outlined"
      />
    </Box>
  );
};
