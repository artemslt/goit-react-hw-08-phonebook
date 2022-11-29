import { Helmet } from 'react-helmet';
import { RegistrationForm } from 'components/RegisterForm/RegisterForm';
import { Container, CssBaseline } from '@mui/material';

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </Container>
  );
}
