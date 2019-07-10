import React from 'react';
import Button from '@material-ui/core/Button';

const MenuHead = () => {
  return (
    <nav className="menu">
      <Button variant="contained">Desayuno</Button>
      <Button variant="contained">Almuerzo</Button>
    </nav>
  )
};

export default MenuHead;