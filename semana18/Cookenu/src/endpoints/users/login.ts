import { generateToken } from "./../../services/authenticator";
import { Request, Response } from "express";
import { connection } from "../../connection";
import { userTableName } from "../../data/TableName";
import { compare } from "../../services/hashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const [user] = await connection(userTableName).where({ email });
    const passwordIsCorrect: Promise<boolean> = compare(
      password,
      user.password
    );

    if (!passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Invalid credentials");
    }

    const token = generateToken({ id: user.id });
    res.send(token);
  } catch (error) {
    console.log(error.message);
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error.");
    } else {
      res.send(error.message);
    }
  }
}
