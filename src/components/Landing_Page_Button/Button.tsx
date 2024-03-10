/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

type Props = {
  children: string;
  link: string;
}

export function Button({ children, link }: Props) {
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
