import app from "./app";
import { signUp } from "./endpoints/users/signup";

app.post("/users/signup", signUp);
app.post("/users/login");
app.get("/users/profile");
app.get("users/:id/profile");

app.post("recipe");
app.get("/recipe/:id");
