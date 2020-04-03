import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import Logo from './Logo';
import image from '../../img/happy-burger2.png';

const Header = ({ text }) => (
  <header className="head">
    <Logo source={image} altText="Header Logo" className="header-logo" />
    <h1>{text}</h1>
  </header>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
