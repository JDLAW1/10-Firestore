// RecipeForm.js
import React, { useState } from "react";
import { TextField, Button, Input, Box } from "@mui/material";
import {
  db,
  storage,
  collection,
  addDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  doc,
  updateDoc,
} from "../firebaseConfig";
import "../styles.css";

const receta = ({ recipe, onRecipeAdded }) => {
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(recipe?.imageUrl || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newImageUrl = imageUrl;

    if (image) {
      const imageRef = ref(storage, `images/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      newImageUrl = await getDownloadURL(imageRef);
    }

    const recipeData = { title, description, imageUrl: newImageUrl };

    if (recipe) {
      await updateDoc(doc(db, "recipes", recipe.id), recipeData);
    } else {
      await addDoc(collection(db, "recipes"), recipeData);
    }

    onRecipeAdded();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <Button type="submit">{recipe ? "Update Recipe" : "Add Recipe"}</Button>
    </Box>
  );
};

export default receta;
