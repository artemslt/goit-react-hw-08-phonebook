import { DeleteButton, ListItem } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handelDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
  };

  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            {name} {phone}
            <DeleteButton type="button" id={id} onClick={handelDeleteContact}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ul>
  );
};
