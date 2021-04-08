import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
    expiresIn: "2min",
  });
  return token;
};

export default generateToken;
