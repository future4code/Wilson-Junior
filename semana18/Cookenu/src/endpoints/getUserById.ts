import { Request, Response } from "express";
import connection from "../connection";
import userTableName from "../data/userTable";

export default async function getUserByEmail(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const id = req.params.id;

    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  } catch (error) {}
}
