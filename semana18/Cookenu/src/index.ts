import app from "./app";
import { login } from "./endpoints/users/login";
import { signup } from "./endpoints/users/signup";
import { getProfile } from "./endpoints/users/getProfile";

app.post("/users/signup", signup);
app.post("/users/login", login);
app.get("/users/profile", getProfile);
app.get("users/:id/profile");

app.post("recipe");
app.get("/recipe/:id");
