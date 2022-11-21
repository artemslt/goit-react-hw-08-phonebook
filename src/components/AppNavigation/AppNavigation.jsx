import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

export const AppNavigation = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
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
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </nav>
  );
};
