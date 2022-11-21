import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contactsList, filterValue) => {
    return filterValue
      ? contactsList.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contactsList;
  }
);
