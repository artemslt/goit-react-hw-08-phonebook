import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handelRegistration = (values, actions) => {
    console.log('values :>> ', values);
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handelRegistration}
      //   validationSchema={contactsShema}
    >
      <Form>
        <label>
          Name
          <Field name="name" autoComplete="off" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          email
          <Field name="email" autoComplete="off" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field name="password" autoComplete="off" />
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
