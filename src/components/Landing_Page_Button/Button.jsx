/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

export function Button({ children, link }) {
  return (
    <>
      <div className={classes.button}>
        <Link to={link}>
          <h2>{children}</h2>
        </Link>
      </div>
    </>
  );
}
