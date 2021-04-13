import app from "./app";
import { login } from "./endpoints/users/login";
import { signup } from "./endpoints/users/signup";
import { getProfile } from "./endpoints/users/getProfile";
import getUserById from "./endpoints/users/getUserById";
import { getRecipeById } from "./endpoints/recipes/getRecipeById";
import { createRecipe } from "./endpoints/recipes/createRecipe";

app.post("/users/signup", signup);
app.post("/users/login", login);
app.get("/users/profile", getProfile);
app.get("users/:id/profile", getUserById);

app.post("recipe", createRecipe);
app.get("/recipe/:id", getRecipeById);
