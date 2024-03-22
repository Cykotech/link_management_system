/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

type Props = {
  children: string;
  link: string;
};

export function Button({ children, link }: Props) {
  const imageUrl = `"./public/Images${link}.webp"`;
  const style = { "--bg": `url(${imageUrl})` } as React.CSSProperties;

  return (
    <>
      <div
        className={classes.button}
        style={style}>
        <Link to={link}>
          <h2>{children}</h2>
        </Link>
      </div>
    </>
  );
}
