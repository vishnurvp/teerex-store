import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.heading}>TeeRex Store</p>
      <button className={classes.cartbtn}>Cart</button>
    </div>
  )
}

export default Header;