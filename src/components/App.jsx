import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactsList/ContactsList';
import { SectionWrapper } from './Section/Section';
import { ContactForm } from './Form/Form';
import { FilterInput } from './FilterInput/FilterInput';
import { AppWrapper } from './AppWrapper/AppWrapper';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ filter: e.target.value });
  };

  addContactsFromForm = (values, actions) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) =>
      contacts.push({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  deleteContact = e => {
    console.log('first', e.target.id);
    this.setState(
      this.state.contacts.splice(
        this.state.contacts.findIndex(contact => contact.id === e.target.id),
        1
      )
    );
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
