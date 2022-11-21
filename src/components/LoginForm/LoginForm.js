import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handelLogIn = (values, actions) => {
    dispatch(
      logIn({
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
        email: '',
        password: '',
      }}
      onSubmit={handelLogIn}
      //   validationSchema={contactsShema}
    >
      <Form>
        <label>
          Email
          <Field name="email" autoComplete="off" />
          <ErrorMessage name="name" component="span" />
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
