import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };
  const deleteRecipe = (indexToDelete) => 
    setRecipes((currentRecipes) => 
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  // Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // Add the ability for the <RecipeCreate /> component to create new recipes.
  // Add fontSize
  return (
    <div className="App">
      <header>
        <h1 style={{fontFamily:"Playfair Display SC", textAlign: "center", textSize: "64px"}}>
        Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes ={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
