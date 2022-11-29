import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { fetchContacts, updateContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { shema } from 'components/Validation';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'secondary.light',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const UpdateContactForm = ({ onClose, isModalOpen, contact }) => {
  const dispatch = useDispatch();

  const handelUpdateContact = (values, actions) => {
    dispatch(
      updateContact({ id: contact.id, name: values.name, number: values.phone })
    );
    actions.setSubmitting(false);
    actions.resetForm();
    dispatch(fetchContacts());
    isModalOpen && onClose();
  };

  const formik = useFormik({
    initialValues: {
      name: contact?.name,
      phone: contact?.number,
    },

    onSubmit: handelUpdateContact,
    validationSchema: shema,
  });
  return (
    <Modal
      open={isModalOpen}
      onClose={onClose}
      aria-labelledby="modal"
      aria-describedby="modal"
    >
      <Box sx={style}>
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
            Update contact
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
              Update contact
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
