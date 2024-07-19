import { useEffect, useState } from "react";
import { useRecipesStore } from "../../../store/recipesStore";
import { findRecipe } from "../../../util/findRecipe";
import classes from "./recipeModals.module.scss";

type Props = {
  showModal: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
  handleClose: React.Dispatch<React.SetStateAction<string>>;
};

export function RecipeInfoModal({
  showModal,
  handleClick,
  handleClose,
}: Props) {
  const { recipes } = useRecipesStore();
  const [recipeInfo, SetRecipeInfo] = useState<TRecipe>();

  useEffect(() => {
    console.log(showModal);
    if (showModal.includes("recipeInfo")) {
      const recipeToFind = showModal.substring(11);
      console.log(recipeToFind);
      SetRecipeInfo(findRecipe(recipeToFind, recipes));
    }
  }, [showModal, recipeInfo]);

  return (
    showModal.includes("recipeInfo") && 
    // (
    //   <div className={classes.modal}>{showModal.substring(11)}</div>
    // )
    (
      <div className={`${classes.info} ${classes.modal}`}>
        <div className={classes.textContainer}>
          <h3>{recipeInfo.name}</h3>
          <span onClick={() => handleClick("allRecipes")}>
            {String.fromCharCode(8592)}
          </span>
          <span onClick={() => handleClose("none")}>X</span>
        </div>
        <div className={classes.recipeContainer}>
          <img
            src={recipeInfo.imgSrc}
            alt={recipeInfo.name}
          />
          <div className={classes.infoContainer}>
            {recipeInfo.ingredients.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
        </div>
      </div>
    )
  );
}
