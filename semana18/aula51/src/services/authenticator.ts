import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "1min";

const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    { id: input.id, role: input.role },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );
  return token;
};

export default generateToken;
