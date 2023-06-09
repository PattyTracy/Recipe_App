import React, { useState } from "react";

function RecipeView({ recipe, index, deleteRecipe} ) {
 
    return (
        <tr key={recipe.index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} /></td>
              <td className="content_td"><p>{recipe.ingredients}</p></td>
              <td className="content_td"><p>{recipe.preparation}</p></td>
               <td> <button name="delete" type="delete" onClick={() => deleteRecipe(recipe)}>Delete</button> </td>
        </tr>
    )
}


export default RecipeView;