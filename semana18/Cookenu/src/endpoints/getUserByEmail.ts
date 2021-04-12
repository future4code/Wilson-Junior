import { Request, Response } from "express";
import connection from "../connection";
import userTableName from "../data/userTable";

export default async function getUserByEmail(email: string): Promise<any> {
  try {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });

    return result[0];
  } catch (error) {}
}
