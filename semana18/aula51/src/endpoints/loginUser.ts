import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import generateToken from "../services/authenticator";
import createUserTable from "../data/userTable";
import getUserByEmail from "./getUserByEmail";

export default async function loginUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalied password!");
    }

    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}
