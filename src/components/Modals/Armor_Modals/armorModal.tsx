import { Link } from "react-router-dom";

import classes from "./armorModal.module.scss";

type Props = {
  show: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ArmorModal({ show, handleClose }: Props) {
  return (
    show && (
      <div
        className={classes.modal}
        onClick={() => handleClose(false)}>
        <h3>How To Use</h3>
        <p>
          Start by filling in the materials in your inventory on{" "}
          <Link to="/inventory">Inventory Manager</Link>.
        </p>
        <p>
          If you have already upgraded any pieces of armor, you can set their
          levels.
        </p>
        <p>Click upgrade to consume the materials from your inventory.</p>
      </div>
    )
  );
}
