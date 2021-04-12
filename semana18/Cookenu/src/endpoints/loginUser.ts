import { Request, Response } from "express";
import generateToken from "../services/authenticator";
import getUserByEmail from "./getUserByEmail";
import { compare } from "bcryptjs";

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

    const compareResult = await compare(userData.password, user.password);

    if (!compareResult) {
      throw new Error("Invalid password!");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
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
