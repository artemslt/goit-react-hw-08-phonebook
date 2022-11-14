// import PropTypes from 'prop-types';
import { DeleteButton, ListItem } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const handelDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
  };
  console.log('contactsList', contactsList);
  const listToRender = filterValue
    ? contactsList.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      )
    : contactsList;

  return (
    <ul>
      {listToRender.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name} {number}
            <DeleteButton type="button" id={id} onClick={handelDeleteContact}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   renderList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
