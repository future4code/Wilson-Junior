import connection from "../connection";

const userTableName = "User";

const createUserTable = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

export default createUserTable;
