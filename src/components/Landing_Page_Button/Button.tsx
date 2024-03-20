/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

type Props = {
  children: string;
  link: string;
};

export function Button({ children, link }: Props) {
  const imageUrl = `"/src/assets/Images${link}.webp"`;

  return (
    <>
      <div
        className={classes.button}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <Link to={link}>
          <h2>{children}</h2>
        </Link>
      </div>
    </>
  );
}
