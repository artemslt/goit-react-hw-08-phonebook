import { NavLink } from 'react-router-dom';

export const AppNavigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">contacts</NavLink>
      <div>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>
      <div>
        <p>auth name</p>
        <button type="button">Log Out</button>
      </div>
    </nav>
  );
};
