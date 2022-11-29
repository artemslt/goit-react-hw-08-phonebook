import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../components/ContactsList/ContactsList';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/AddcontactForm/AddContactForm';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { FilterInput } from 'components/FilterInput/FilterInput';
import { Box, Container, CssBaseline } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BasicModal } from 'components/Modal/Modal';

export default function Contacts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isLogIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLogIn) {
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, isLogIn]);

  return (
    <Container component="main">
      <CssBaseline />
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading && <p> Contacts loading........</p>}
      {isLogIn && (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <Box m={1} flexGrow={2}>
            <Box display="flex" justifyContent="space-between">
              <FilterInput />
              <IconButton
                sx={{ display: { xs: 'flex', md: 'none' } }}
                size="large"
                onClick={handleOpen}
                color="inherit"
              >
                <PersonAddIcon />
              </IconButton>
            </Box>
            <ContactList />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' }, marginTop: 6 }}>
            <ContactForm />
          </Box>
        </Box>
      )}
      <BasicModal isOpen={open} onClose={handleClose} />
    </Container>
  );
}
