import React, { ReactNode, useState } from "react";
import { useInventoryStore } from "../../store/inventoryStore";
import { useRecipesStore } from "../../store/recipesStore";
import { RecipeModal } from "../../components/Modals/Recipe_Modals/recipeModal";
import { AllRecipesModal } from "../../components/Modals/Recipe_Modals/allRecipesModal";
import { RecipeInfoModal } from "../../components/Modals/Recipe_Modals/infoModal";

import classes from "./Cookbook.module.scss";

interface Props {
  style?: React.CSSProperties;
  showModal: string;
  modalClick: React.Dispatch<React.SetStateAction<string>>;
}

export function Cookbook({ style, showModal, modalClick }: Props) {
  const { inventory, consumeMaterials } = useInventoryStore();
  const inventoryStore = useInventoryStore();
  const recipesStore = useRecipesStore();
  const { activeIngredients, addIngredient, recipes, resetIngredients } =
    useRecipesStore((state) => state);

  const [recipeInfo, setRecipeInfo] = useState("");

  function cookRecipe() {
    consumeMaterials(activeIngredients, inventoryStore);
    resetIngredients();
  }

  function renderActiveRecipe(): ReactNode {
    return (
      <>
        <div className={classes.recipeCard}>
          <img
            src={recipes[144].imgSrc}
            alt={recipes[144].imgSrc}
          />
        </div>
        <button
          className={classes.button}
          onClick={() => cookRecipe()}>
          Cook
        </button>
      </>
    );
  }

  return (
    <div
      className={classes.cookbook}
      style={style}>
      <div className={classes.ingredientContainer}>
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
        <div className={classes.activeContainer}>
          {activeIngredients.map((ingredient, i) => {
            return (
              <div
                className={classes.ingredientCard}
                key={i}>
                <img src={ingredient.imgSrc} />
              </div>
            );
          })}
        </div>
        {activeIngredients.length === 0 ? "" : renderActiveRecipe()}
      </div>
      <RecipeModal
        showModal={showModal}
        handleClose={modalClick}></RecipeModal>
      <AllRecipesModal
        showModal={showModal}
        handleInfoModal={setRecipeInfo}
        handleClick={modalClick}
        handleClose={modalClick}></AllRecipesModal>
      <RecipeInfoModal
        showModal={showModal}
        showInfo={recipeInfo}
        handleClick={modalClick}
        handleClose={modalClick}></RecipeInfoModal>
    </div>
  );
}
