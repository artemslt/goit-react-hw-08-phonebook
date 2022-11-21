import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LogInPage = lazy(() => import('../pages/LogIn'));
const RegistrationPage = lazy(() => import('../pages/Registration'));

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
};

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { ContactList } from './ContactsList/ContactsList';
// import { SectionWrapper } from './Section/Section';
// import { ContactForm } from './Form/Form';
// import { FilterInput } from './FilterInput/FilterInput';
// import { AppWrapper } from './AppWrapper/AppWrapper';
// import { selectIsLoading, selectError } from '../redux/contacts/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <AppWrapper title="Phonebook">
//       <SectionWrapper>
//         <ContactForm />
//         <FilterInput />
//       </SectionWrapper>

//       <SectionWrapper title="Contacts">
//         {isLoading && !error && <b>Loading......</b>}
//         <ContactList />
//       </SectionWrapper>
//     </AppWrapper>
//   );
// };
