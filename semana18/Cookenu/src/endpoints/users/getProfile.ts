import { Request, Response } from "express";
import { connection } from "../../connection";
import { userTableName } from "../../data/TableName";
import { getTokenData } from "../../services/authenticator";
import { compare } from "../../services/hashManager";

export async function getProfile(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization!;

    const tokenData = getTokenData(token);

    const [user] = await connection(userTableName).where({ id: tokenData?.id });

    res.send({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    console.log(error.message);
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send(error.message);
    }
  }
}
