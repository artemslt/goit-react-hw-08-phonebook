import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactsList/ContactsList';
import { SectionWrapper } from './Section/Section';
import { ContactForm } from './Form/Form';
import { FilterInput } from './FilterInput/FilterInput';
import { AppWrapper } from './AppWrapper/AppWrapper';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));
    if (!localStorageData) {
      return;
    }
    this.setState({ contacts: localStorageData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ filter: e.target.value });
  };

  addContactsFromForm = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  deleteContact = e => {
    console.log('first', e.target.id);
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== e.target.id),
    }));
  };

  listToRender = () => {
    return this.state.filter
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    return (
      <AppWrapper title="Phonebook">
        <SectionWrapper>
          <ContactForm addContactsFromForm={this.addContactsFromForm} />
          <FilterInput handleChange={this.handleChange} />
        </SectionWrapper>

        <SectionWrapper title="Contacts">
          <ContactList
            renderList={this.listToRender()}
            deleteContact={this.deleteContact}
          />
        </SectionWrapper>
      </AppWrapper>
    );
  }
}
