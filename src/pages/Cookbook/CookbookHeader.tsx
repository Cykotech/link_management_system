import classes from "./Cookbook.module.scss";
import { useRecipesStore } from "../../store/recipesStore";

type Props = {
  showModal: string;
  modalClick: React.Dispatch<React.SetStateAction<string>>;
};

export function CookbookHeader({ showModal, modalClick }: Props) {
  const { resetIngredients } = useRecipesStore();
  return (
    <div className={classes.header}>
      <h2>Cookbook</h2>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>How To Use</button>
        <button className={classes.button}>Show All Recipes</button>
        <button
          className={classes.button}
          onClick={() => resetIngredients()}>
          Reset
        </button>
      </div>
    </div>
  );
}
