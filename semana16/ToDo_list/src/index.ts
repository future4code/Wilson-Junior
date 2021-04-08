import app from "./app";
import createUser from "./endpoint/createUser";
import getUserById from "./endpoint/getUserById";
import editUser from "./endpoint/editUser";
import createTask from "./endpoint/createTask";

app.put("/user", createUser);

app.get("/user/:id", getUserById);

app.post("/user/:id", editUser);

app.post("/task/:id", createTask);
