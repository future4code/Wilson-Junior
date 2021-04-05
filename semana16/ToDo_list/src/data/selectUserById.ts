import connection from "../connection";

export default async function selecttUserById (
    id: string,
) {
    const result = await connection('to_do_list_users')
        .select('*')
        .where({ id })
    
    return result[0]
}