import { useRecipesStore } from "../../../store/recipesStore";
import classes from "./recipeModals.module.scss";

type Props = {
  showModal: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
  handleInfoModal: React.Dispatch<React.SetStateAction<string>>;
};

export function AllRecipesModal({
  showModal,
  handleClick,
  handleClose,
  handleInfoModal,
}: Props) {
  const { recipes } = useRecipesStore();
  return (
    showModal === "allRecipes" && (
      <div className={`${classes.all} ${classes.modal}`}>
        <div className={classes.textContainer}>
          <h3>All Recipes</h3>
          <span onClick={() => handleClose("none")}>X</span>
        </div>
        <div className={classes.recipesContainer}>
          {recipes.map((recipe, i) => {
            return (
              <div
                className={classes.card}
                key={`${recipe.name}-${i}`}
                onClick={() => {
                  handleInfoModal(recipe.name);
                  handleClick("recipeInfo");
                }}>
                <img
                  src={recipe.imgSrc}
                  alt={recipe.name}
                />
                <p>{recipe.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
