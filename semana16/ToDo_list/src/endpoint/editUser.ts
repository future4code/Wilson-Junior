import { Request, Response } from 'express'
import updateUser from '../data/updateUser'


export default async function editUser(req:Request, res: Response) {
    try {
        if(
            req.body.name === ''||
            req.body.nickname === ''||
            req.body.email === ''
        ) {
            res 
            .status(400)
            .send({message: 'Nenhum dos campos pode estar em branco.'})
        
            return
        }
        if(
            !req.body.name &&
            !req.body.nickname &&
            !req.body.email
        ) {
            res 
            .status(400)
            .send({message:'Escolha pelo menos um valor de entrada.'})
            
            return
        }
        await updateUser (
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res 
            .status(200)
            .send({message: 'Usuário atualizado com sucesso!'})


    } catch (error) {
        res.status(400).send({
            message:error.message || error.sqlMessage 
        })
    }
}