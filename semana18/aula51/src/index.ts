import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import signUpUser from "./endpoints/signUp";
import loginUser from "./endpoints/loginUser";
import getUserProfile from "./endpoints/getUserProfile";
import getUserById from "./endpoints/getUserById";

app.post("/user/signup", createUser);

app.put("/user/edit/:id", editUser);

app.post("/user/signup", signUpUser);

app.post("/user/login", loginUser);

app.get("/user/profile", getUserProfile);

app.get("/user/:id", getUserById);
