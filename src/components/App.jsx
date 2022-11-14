import { ContactList } from './ContactsList/ContactsList';
import { SectionWrapper } from './Section/Section';
import { ContactForm } from './Form/Form';
import { FilterInput } from './FilterInput/FilterInput';
import { AppWrapper } from './AppWrapper/AppWrapper';

export const App = () => {
  return (
    <AppWrapper title="Phonebook">
      <SectionWrapper>
        <ContactForm />
        <FilterInput />
      </SectionWrapper>

      <SectionWrapper title="Contacts">
        <ContactList />
      </SectionWrapper>
    </AppWrapper>
  );
};
