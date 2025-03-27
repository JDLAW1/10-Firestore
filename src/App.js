import React, { useState } from "react";
import RecipeForm from "./Receta/receta";
import RecipeList from "./Receta/lista";
import { Container } from "@mui/material";
import "./styles.css";

function App() {
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  return (
    <Container>
      <RecipeForm
        recipe={recipeToEdit}
        onRecipeAdded={() => setRecipeToEdit(null)}
      />
      <RecipeList onRecipeEdit={setRecipeToEdit} />
    </Container>
  );
}

export default App;
