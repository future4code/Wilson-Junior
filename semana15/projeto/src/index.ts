import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import  {accounts} from './accounts'

const app: Express = express();

app.use(express.json());
app.use(cors());

// Create a user account
app.post('/users/create', (req:Request, res:Response) => {
    
    try {
        const {name, CPF, date} = req.body

        const [day, month, year] = date.split('/')
        
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const today: Date = new Date();
        
        const todayYear: number = today.getFullYear()

        const age: number = todayYear - year

        const checkCPF = accounts.find((user) => user.CPF.replace(/([^\d])+/gim, '') === CPF.replace(/([^\d])+/gim, ''))

        
        if (age < 18){
            res.statusCode = 406 
            throw new Error("A idade deve ser maior de 18 anos.")
        }

        if (checkCPF !== undefined){
            res.statusCode = 406 
            throw new Error("Esse CPF já está cadastrado.")
        }

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        res
            .status(201)
            .send('Conta criada com sucesso!')

    } catch (error) {
        console.log(error)
        res
            .send(error.message)
    }
})

// Get all users accounts existent
app.get('/users/all', (req: Request, res: Response) => { 

    try{
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada.")
        }
        res
        .status(200)
        .send(accounts)
    }
    catch(error){
        res
        .send(error.message)
    }
})

// Get balance of an user account
app.get('/users/balance/:cpf', (req: Request, res: Response) => { 

    try{
        const checkCPF = accounts.find((user) => {return user.CPF.replace(/([^\d])+/gim, '') === req.params.cpf.replace(/([^\d])+/gim, '')})

        if(checkCPF){
        res
        .status(200)
        .send({balance:checkCPF.balance})
        }
    }
    catch(error){
        res
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