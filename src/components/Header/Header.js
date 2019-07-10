import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="head">
      <Logo />
      <h3>Bienvenido/a Usuario</h3>
    </header>
  )
};

export default Header;