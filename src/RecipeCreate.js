import React, { useState } from "react";
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

function RecipeCreate({ recipes, setRecipes }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value)
  };
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value)
  };
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value)
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value)
  };
  const handlePreparationChange = (event) => {
    setPreparation(event.target.value)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {
      name, cuisine, photo, ingredients, preparation
    }
    setRecipes([ ...recipes, recipe]);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
      
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tr>
            <td>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleNameChange}
              value={name}
              />
              </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
                value={cuisine} 
                />
            </td>
              <td>
                <input
                  name="photo"
                  id="photo"
                  type="url"
                  placeholder="URL"
                  onChange={handlePhotoChange}
                  value={photo}
                  />
              </td>
              <td>
                <textarea
                  name="ingredients"
                  id="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  onChange={handleIngredientsChange}
                  value={ingredients}
                  />
              </td>
              <td>
                <textarea
                  name="preparation"
                  id="preparation"
                  type="text"
                  placeholder="Preparation"
                  onChange={handlePreparationChange}
                  value={preparation}
                  />
              </td>
            <td>
              <button type="submit">Create</button>
            </td>
        </tr>
      </table>
    </form>
  );
}

export default RecipeCreate;
