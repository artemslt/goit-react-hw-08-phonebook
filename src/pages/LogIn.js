import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, CssBaseline } from '@mui/material';
export default function Login() {
  return (
    <Container component="main" maxWidth="xs" sx={{ pt: 8 }}>
      <CssBaseline />
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}
