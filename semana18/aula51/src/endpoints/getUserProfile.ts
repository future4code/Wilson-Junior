import { getData } from "../data/getData";
import getUserById from "./getUserByEmail";
import { Request, Response } from "express";

export default async function getUserProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const AuthenticationData = getData(token);
    if (AuthenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }
    const user = await getUserById(AuthenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: AuthenticationData.role,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
}
