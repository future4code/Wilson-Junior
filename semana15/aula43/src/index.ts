//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { user, users } from './users'

// Configurations
const app = express();

app.use(express.json());
app.use(cors());

// Endpoints
// Get all users id and name
app.get('/users/all', (req: Request, res: Response) => {

    const result = users.map(user => ({
        id: user.id,
        name: user.name
    }))
    res
        .status(200)
        .send(result)
});
// Get all users with a specific type
app.get('/users/search', (req: Request, res: Response) => {

    const result: user[] = users.filter(users => users.type.toLowerCase().includes(req.query.type as string))
    try {
        if (!req.query.type) {
            throw new Error("Insert a type")
        }
        if (req.query.type) {
            res
                .status(200)
                .send(result)
        }

    } catch (error) {
        res
            .status(404)
            .send("Not found")
    }
})
// Get an user by name
app.get('/users/name', (req: Request, res: Response) => {

    const result: user[] = users.filter(users => users.name.toLowerCase().includes(req.query.name as string))

    try {
        if (!req.query.name) {
            throw new Error("Insert a type")
        }
        if (req.query.name) {
            res
                .status(200)
                .send(result)
        }

    } catch (error) {
        res
            .status(404)
            .send("Not found")
    }
})

// Add a new user 
app.post('/users', (req: Request, res: Response) => {

    let errorCode: number = 400;

    try {
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if (!reqBody.id || !reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age) {
            throw new Error("Check the fields, perhaps it still empty")
        }

        users.push(reqBody)
        res
            .status(201)
            .send("User created. Good job!")

    } catch (error) {
        res
            .status(404)
            .send("It was impossible to create a new user! Try it agin.")
    }
})

// Change an user
app.put('/users/edit/:id', (req:Request, res: Response) => {
    let errorCode: number = 400

    try{
        const userIndex: number = users.findIndex((user) => user.id === Number(req.params.id))
        
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if(userIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age){
        
            throw new Error('There was no changes in your user!');
        }

        if(reqBody.name){
            users[userIndex].name = req.body.name;
        }

        if(reqBody.email){
            users[userIndex].email = reqBody.email;
        }

        if(reqBody.type){
            users[userIndex].type = reqBody.type;
        }

        if(reqBody.age){
            users[userIndex].age = reqBody.age;
        }

        res
            .status(200)
            .send("User successfully updated")

    } catch (error) {
        console.log(error)
        res
        .status(errorCode)
        .send(error.message)
    }
})

// Ainda preciso conferer, mas sei que tem algo errado aqui
app.patch('/users/edit/:id', (req:Request, res: Response) => {
    let errorCode: number = 400

    try{
        const userIndex: number = users.findIndex((user) => user.id === Number(req.params.id))
        
        const reqBody: user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        };

        if(userIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        if(!reqBody.name || !reqBody.email || !reqBody.type || !reqBody.age){
        
            throw new Error('There was no changes in your user!');
        }

        if(reqBody.name){
            users[userIndex].name = req.body.name;
        }

        if(reqBody.email){
            users[userIndex].email = reqBody.email;
        }

        if(reqBody.type){
            users[userIndex].type = reqBody.type;
        }

        if(reqBody.age){
            users[userIndex].age = reqBody.age;
        }

        res
            .status(200)
            .send("User successfully updated")

    } catch (error) {
        console.log(error)
        res
        .status(errorCode)
        .send(error.message)
    }
})









const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

