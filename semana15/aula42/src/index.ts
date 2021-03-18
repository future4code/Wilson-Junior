import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net';
import { countries, country } from './countries'

// Configurations
 const app: Express = express();

 app.use(express.json());
 app.use(cors());


// Endpoints

// #1
app.get('/countries/all', (req: Request, res: Response) => {
    
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    })); 
    
    res
        .status(200)
        .send(result)
});

// #3
app.get('/countries/search', (req: Request, res: Response) => { 

    let result: country[] = countries 
    try {

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Invalid Parameters");
        }

        if (req.query.name) {
            result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }

        if(req.query.capital) {
            result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }
        
        if (req.query.continent){
            result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }
    } catch (error){ 
        res
            .status(404)
            .send("Not found")
    }
        res
        .status(200)
        .send(result);  
})

// #2
app.get('/countries/:id', (req: Request, res: Response) => { 
    
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if (result) {
        res
        .status(200)
        .send(result)
    } else {
        res
        .status(404)
        .send("Not found")
    }
});

// #4
// Não entendi esse código
app.put('/countries/edit/:id', (req:Request, res: Response) => {
    let errorCode: number = 400

    try{
        const countryIndex: number = countries.findIndex((country) => country.id === Number(req.params.id)
        )

        if(countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        if(!req.body.name && !req.body.capital){
            console.log(req.query.name, req.body.capital);
            throw new Error('Invalied Parameters');
        }

        if(req.body.name){
            countries[countryIndex].name = req.body.name;
        }

        if(req.body.capital){
            countries[countryIndex].capital = req.body.capital;
        }

        res
            .status(200)
            .send("Country successfully updated")
    } catch (error) {
        console.log(error)
        res
        .status(errorCode)
        .send(error.message)
    }
})


// Server
 const server = app.listen(process.env.PORT || 3003, () => {
    if (server) { 
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});



