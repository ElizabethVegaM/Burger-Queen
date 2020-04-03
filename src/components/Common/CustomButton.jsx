/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ text, btnSize, clickFunc, cssClass }) => (
  <Button variant="contained" size={btnSize} type="button" onClick={clickFunc} className={cssClass}>{text}</Button>
);

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  btnSize: PropTypes.string,
  clickFunc: PropTypes.func,
  cssClass: PropTypes.string,
};

export default CustomButton;
