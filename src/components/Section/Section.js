import PropTypes from 'prop-types';
import { Titles } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      {<Titles>{title}</Titles>}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
