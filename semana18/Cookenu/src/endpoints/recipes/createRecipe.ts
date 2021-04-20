import { getTokenData } from "./../../services/authenticator";
import { Request, Response } from "express";
import { connection } from "../../connection";
import { recipeTableName } from "../../data/TableName";
import { generateId } from "../../services/idGenerator";

export async function createRecipe(req: Request, res: Response): Promise<void> {
  try {
    const token: string = req.headers.authorization!;
    const { title, description } = req.body;

    const tokenData = getTokenData(token);

    const id: string = generateId();

    const createdAt = new Date();

    await connection(recipeTableName).insert({
      id,
      title,
      description,
      created_at: createdAt,
      author_id: tokenData!.id,
    });

    res.send("You just created your recipe!");
  } catch (error) {
    console.log(error.message);
    if (res.statusCode === 200) {
      res.status(500).send("Internal server error");
    } else {
      res.send(error.message);
    }
  }
}
