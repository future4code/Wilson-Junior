console.log('Hello, World')

// a) Não sei se entendi a pergunta direito, mas é possível utilizar argumentos através do comando process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

const novaIdade = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)





