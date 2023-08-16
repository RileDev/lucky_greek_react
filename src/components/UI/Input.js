import React from "react";

import classes from "./Input.module.css";

const SingleInput = React.forwardRef((props, ref) => {
  const classSize =
    props.size === "s"
      ? `${classes.control} ${classes.sm}`
      : classes["control"];

  return (
    <input
      type={props.type || "text"}
      ref={ref}
      maxLength={props.maxLength || "99"}
      placeholder={props.placeholder}
      className={classSize}
      id={props.id}
      tabIndex={props.id}
      required
    />
  );
});

export default SingleInput;
