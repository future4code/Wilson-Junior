import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import generateToken from "../services/authenticator";
import createUserTable from "../data/userTable";
import { hash } from "../services/hashManager";

export default async function signUpUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUserTable(id, userData.email, userData.password);

    const token = generateToken({
      id,
      role: userData.role,
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
