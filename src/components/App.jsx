import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={(values, actions) => {
              console.log('values', values);
              this.setState(({ contacts }) =>
                contacts.push({ id: nanoid(), name: values.name })
              );
              actions.setSubmitting(false);
              actions.resetForm();
            }}
          >
            <Form>
              <label>
                <Field type="text" name="name" />
              </label>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}
