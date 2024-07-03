import { Link } from "react-router-dom";

import classes from "./recipeModals.module.scss";

type Props = {
  showModal: string;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
};

export function RecipeModal({ showModal, handleClose }: Props) {
  return (
    showModal === "recipe" && (
      <div
        className={classes.modal}
        onClick={() => handleClose("none")}>
        <h3>How to Use</h3>
        <p>
          Start by filling in the materials in your inventory on{" "}
          <Link to="/inventory">Inventory Manager</Link>.
        </p>
        <p>
          Select up to 5 ingredients to cook, the recipe will update as
          ingredients are selected.
        </p>
        <p>
          You may either reset to try a new recipe, or click Cook to consume the
          ingredients.
        </p>
      </div>
    )
  );
}
