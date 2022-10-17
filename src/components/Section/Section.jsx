import PropTypes from 'prop-types';
import { Section } from './Section.styled';

export const SectionWrapper = ({ title, children }) => {
  return title ? (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  ) : (
    <div>{children}</div>
  );
};

SectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
