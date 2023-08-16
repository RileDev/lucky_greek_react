import React, { useContext } from "react";

import classes from "./Header.module.css";
import luckyContext from "../../store/lucky-context";

const Header = () => {
    const ctx = useContext(luckyContext);

  return (
    <>
      <h1 className={classes.title}>Lucky Greek</h1>
      <p className={classes.total}>Total: ${ctx.total}</p>
    </>
  );
};

export default Header;
