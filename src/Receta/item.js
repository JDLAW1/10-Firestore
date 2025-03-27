import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { db, doc, deleteDoc } from "../firebaseConfig";
import "../styles.css";

const RecipeItem = ({ recipe, onRecipeEdit }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "recipes", recipe.id));
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {recipe.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={recipe.imageUrl}
          alt={recipe.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onRecipeEdit(recipe)}>
          Edit
        </Button>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeItem;
