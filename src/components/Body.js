import React from "react";
import classes from './Body.module.css';

const Body = () => {
  return (
    <div className={classes.bodyArea}>
      <div className={classes.fileterArea}>Filter</div>
      <div className={classes.productsArea}>Products</div>
    </div>
  )
}
export default Body;