import { Request, Response } from "express";
import connection from "../connection";
import { getData } from "../data/getData";
import userTableName from "../data/userTable";

export default async function getUserByEmail(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const token = req.headers.authorization as string;
    const AuthenticationData = getData(token);

    if (AuthenticationData.role !== "admin") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id;

    const result: any = await connection
      .delete()
      .from(userTableName)
      .where({ id });

    return result[0];
  } catch (error) {}
}
