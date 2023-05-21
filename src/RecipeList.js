import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
      <table>
        <thead>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
        </thead>
        <tbody>
    {recipes.map((recipe, index) => (
             <RecipeView recipe={recipe} index={index} deleteRecipe={deleteRecipe}/>
                     ))}
          </tbody>
      </table>
  );
}

export default RecipeList;
