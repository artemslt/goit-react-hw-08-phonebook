import PropTypes from 'prop-types';
import { DeleteButton, ListItem } from './ContactsList.styled';

export const ContactList = ({ renderList, deleteContact }) => {
  return (
    <ul>
      {renderList.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name} {number}
            <DeleteButton type="button" id={id} onClick={deleteContact}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  renderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
