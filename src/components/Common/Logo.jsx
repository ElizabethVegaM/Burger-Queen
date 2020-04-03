/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ source, altText, sourceClass }) => (
  <img src={source} alt={altText} className={sourceClass} />
);

Logo.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string,
  sourceClass: PropTypes.string,
};

export default Logo;
