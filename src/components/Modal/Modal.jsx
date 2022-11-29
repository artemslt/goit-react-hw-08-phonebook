import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ContactForm } from 'components/AddcontactForm/AddContactForm';
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

export const BasicModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal"
      aria-describedby="modal"
    >
      <Box sx={style}>
        <ContactForm onClose={onClose} isModalOpen={isOpen} />
      </Box>
    </Modal>
  );
};
