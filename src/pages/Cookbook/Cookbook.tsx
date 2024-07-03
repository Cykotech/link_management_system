import React from "react";
import { useInventoryStore } from "../../store/inventoryStore";
import { useRecipesStore } from "../../store/recipesStore";
import { RecipeModal } from "../../components/Modals/Recipe_Modals/recipeModal";
import { AllRecipesModal } from "../../components/Modals/Recipe_Modals/allRecipesModal";

import classes from "./Cookbook.module.scss";

interface Props {
  style?: React.CSSProperties;
  showModal: string;
  modalClick: React.Dispatch<React.SetStateAction<string>>;
}

export function Cookbook({ style, showModal, modalClick }: Props) {
  const { inventory } = useInventoryStore();
  const recipesStore = useRecipesStore();
  const { activeIngredients, addIngredient } = useRecipesStore(
    (state) => state
  );

  return (
    <div className={classes.cookbook} style={style}>
      <div
        className={classes.ingredientContainer}>
        {inventory.map((ingredient, i) => {
          return (
            <div
              className={classes.ingredientCard}
              key={`${ingredient.name}-${i}`}
              onClick={() => {
                addIngredient(ingredient, recipesStore);
              }}>
              <img src={ingredient.imgSrc} />
              <p>{ingredient.name}</p>
              {/* <p>{ingredient.quantity}</p> */}
            </div>
          );
        })}
      </div>
      <div className={classes.recipeContainer}>
        {activeIngredients.map((ingredient, i) => {
          return (
            <div className={classes.ingredientCard} key={i}>
              <img src={ingredient.imgSrc} />
            </div>
          )
        })}
      </div>
      <RecipeModal showModal={showModal} handleClose={modalClick}></RecipeModal>
      <AllRecipesModal showModal={showModal} handleClose={modalClick}></AllRecipesModal>
    </div>
  );
}
