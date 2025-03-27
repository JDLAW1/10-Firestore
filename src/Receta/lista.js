import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, collection } from "../firebaseConfig";
import RecipeItem from "./item";
import "../styles.css";

const RecipeList = ({ onRecipeEdit }) => {
  const [recipes, loading, error] = useCollection(collection(db, "recipes"));

  if (loading) return <p>No hay recetas</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {recipes?.docs.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={{ id: recipe.id, ...recipe.data() }}
          onRecipeEdit={onRecipeEdit}
        />
      ))}
    </div>
  );
};

export default RecipeList;
