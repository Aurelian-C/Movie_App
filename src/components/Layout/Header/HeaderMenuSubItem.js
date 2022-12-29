import React from 'react';
import classes from './HeaderMenuSubItem.module.scss';

const HeaderMenuSubItem = props => {
  return <li className={classes['header__menu-extra']}>{props.name}</li>;
};

export default HeaderMenuSubItem;
