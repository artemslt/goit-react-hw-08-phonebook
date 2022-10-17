import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, SubmitButton, Wrapper } from './Form.styled';
import { contactsShema } from '../Validation';

export const ContactForm = ({ addContactsFromForm }) => {
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
