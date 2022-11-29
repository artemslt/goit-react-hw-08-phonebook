import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { shema } from 'components/Validation';

export const ContactForm = ({ onClose, isModalOpen }) => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);

  const addContactsFromForm = (values, actions) => {
    if (
      contactsList.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      actions.setSubmitting(false);

      return;
    }
    dispatch(addContact({ name: values.name, number: values.phone }));
    actions.setSubmitting(false);
    actions.resetForm();
    isModalOpen && onClose();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    onSubmit: addContactsFromForm,
    validationSchema: shema,
  });
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        padding: 2,
        borderRadius: 2,
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h2" variant="h5">
        Add new contact
      </Typography>
      <form onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <TextField
          size="small"
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          autoComplete="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          size="small"
          margin="normal"
          required
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          type="phone"
          autoComplete="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add contact
        </Button>
      </form>
    </Box>
  );
};
