import { findRecipe } from "../../../util/findRecipe";
import classes from "./recipeModals.module.scss";

type Props = {
  showModal: string;
  showInfo: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
};

export function RecipeInfoModal({
  showModal,
  showInfo,
  handleClick,
  handleClose,
}: Props) {
  const recipe = findRecipe(showInfo);

  return (
    showModal === "recipeInfo" && (
      <div className={`${classes.info} ${classes.modal}`}>
        <div className={classes.textContainer}>
          <h3>{recipe.name}</h3>
          <span onClick={() => handleClick("allRecipes")}>
            {String.fromCharCode(8592)}
          </span>
          <span onClick={() => handleClose("none")}>X</span>
        </div>
        <img src={recipe.imgSrc} alt={recipe.name} />
      </div>
    )
  );
}
