import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, SubmitButton, Wrapper } from './Form.styled';
import { contactsShema } from '../Validation';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

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
        number: '',
      }}
      onSubmit={addContactsFromForm}
      validationSchema={contactsShema}
    >
      <Form>
        <Wrapper>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </Wrapper>
        <Wrapper>
          Phone number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </Wrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Formik>
  );
};

ContactForm.protoType = {
  addContactsFromForm: PropTypes.func.isRequired,
};
