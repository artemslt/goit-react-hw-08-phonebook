import { Wrapper } from '../AppWrapper/AppWrapper.styled';
import PropTypes from 'prop-types';

export const AppWrapper = ({ title, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      {children}
    </Wrapper>
  );
};

AppWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
