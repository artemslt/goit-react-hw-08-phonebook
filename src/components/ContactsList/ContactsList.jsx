import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { UpdateContactForm } from 'components/UpdateContact/UdateContact';

export const ContactList = () => {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const handelDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
  };
  const handelUpdateContact = e => {
    const matchedContact = contacts.find(contact => contact.id === e.target.id);
    setContact(matchedContact);
    handleOpen();
  };

  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        padding: 2,
        borderRadius: 2,
      }}
    >
      <List sx={{ display: 'grid', gap: 1 }}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ListItem
              dense={true}
              key={id}
              sx={{
                backgroundColor: 'secondary.light',
                boxShadow: 2,
                borderColor: 'primary.dark',
                borderRadius: 2,
              }}
            >
              <ListItemText>
                {name} {number}
              </ListItemText>
              <Button
                sx={{
                  ml: 1,
                  color: 'secondary.dark',
                  borderColor: 'secondary.dark',
                }}
                variant="outlined"
                type="button"
                id={id}
                onClick={handelUpdateContact}
              >
                update
              </Button>
              <Button
                sx={{
                  ml: 1,
                  color: 'secondary.dark',
                  borderColor: 'secondary.dark',
                }}
                variant="outlined"
                type="button"
                id={id}
                onClick={handelDeleteContact}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
      {open && (
        <UpdateContactForm
          onClose={handleClose}
          isModalOpen={open}
          contact={contact}
        />
      )}
    </Box>
  );
};
