export type transaction = {
    amount: number,
    date: Date,
    description: string
}

export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<transaction>
}
