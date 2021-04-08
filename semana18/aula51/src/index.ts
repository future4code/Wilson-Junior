import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import signUpUser from "./endpoints/signUp";
import loginUser from "./endpoints/loginUser";

app.post("/user/signup", createUser);

app.put("/user/edit/:id", editUser);

app.post("/user/signup", signUpUser);

app.post("/user/login", loginUser);
