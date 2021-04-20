import { Request, Response } from "express";
import { connection } from "../../connection";
import { userTableName } from "../../data/TableName";
import { getTokenData } from "../../services/authenticator";

export default async function getUserById(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization!;

    getTokenData(token);

    const [user] = await connection(userTableName).where({ id: req.params.id });

    const { id, name, email } = user;

    res.send({ id, name, email });
  } catch (error) {
    console.log(error.message);
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send(error.message);
    }
  }
}
