import { useRecipesStore } from "../../../store/recipesStore";
import classes from "./recipeModals.module.scss";

type Props = {
  showModal: string;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
};

export function AllRecipesModal({ showModal, handleClose }: Props) {
  const { recipes } = useRecipesStore();
  return (
    showModal === "allRecipes" && (
      <div className={classes.modal}>
        <div className={classes.textContainer}>
          <h3>All Recipes</h3>
          <span onClick={() => handleClose("none")}>X</span>
        </div>
        <div className={classes.recipesContainer}>
          {recipes.map((recipe) => {
            return (
              <div className={classes.card}>
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
