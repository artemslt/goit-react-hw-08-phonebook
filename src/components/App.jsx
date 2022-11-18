import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactList } from './ContactsList/ContactsList';
import { SectionWrapper } from './Section/Section';
import { ContactForm } from './Form/Form';
import { FilterInput } from './FilterInput/FilterInput';
import { AppWrapper } from './AppWrapper/AppWrapper';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrapper title="Phonebook">
      <SectionWrapper>
        <ContactForm />
        <FilterInput />
      </SectionWrapper>

      <SectionWrapper title="Contacts">
        {isLoading && !error && <b>Loading......</b>}
        <ContactList />
      </SectionWrapper>
    </AppWrapper>
  );
};
