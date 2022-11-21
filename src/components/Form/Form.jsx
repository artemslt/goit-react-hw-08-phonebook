import { Formik, Field, ErrorMessage } from 'formik';
import { Form, SubmitButton, Wrapper } from './Form.styled';
import { contactsShema } from '../Validation';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);

  const addContactsFromForm = (values, actions) => {
    if (
      contactsList.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={addContactsFromForm}
      validationSchema={contactsShema}
    >
      <Form>
        <Wrapper>
          Name
          <Field name="name" autoComplete="off" />
          <ErrorMessage name="name" component="span" />
        </Wrapper>
        <Wrapper>
          Phone number
          <Field name="phone" autoComplete="off" />
          <ErrorMessage name="phone" component="span" />
        </Wrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Formik>
  );
};
