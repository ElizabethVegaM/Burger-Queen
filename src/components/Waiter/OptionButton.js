import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const OptionButton = (props) => <MenuItem key={props.key} value={props.name} menuData={props.data}>{props.name} - ${props.price}</MenuItem>
};

export default OptionButton;