/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ text, clickFunc }) => (
  <Button variant="contained" type="button" onClick={clickFunc}>{text}</Button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickFunc: PropTypes.func,
};

export default CustomButton;
