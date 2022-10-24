import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactsList/ContactsList';
import { SectionWrapper } from './Section/Section';
import { ContactForm } from './Form/Form';
import { FilterInput } from './FilterInput/FilterInput';
import { AppWrapper } from './AppWrapper/AppWrapper';
// import { setLocale } from 'yup';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const localStore = window.localStorage.getItem('contacts');
      setContacts(JSON.parse(localStore));
      isFirstRender.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactsFromForm = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, newContact]);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const deleteContact = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  };

  const listToRender = () =>
    filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  return (
    <AppWrapper title="Phonebook">
      <SectionWrapper>
        <ContactForm addContactsFromForm={addContactsFromForm} />
        <FilterInput
          handleChange={e => setFilter(e.target.value.toLowerCase())}
        />
      </SectionWrapper>

      <SectionWrapper title="Contacts">
        <ContactList
          renderList={listToRender()}
          deleteContact={deleteContact}
        />
      </SectionWrapper>
    </AppWrapper>
  );
};
