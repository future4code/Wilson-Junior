// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// O programa requer do usuário um número qualquer. Após a inserção do número é feita a conferência 
// de divisibilidade do número por 2 que deve ser 0, ou seja, se o número é par.
// Passar ou não no teste depende diretamente de escolher um número par, logo apenas números pares passarão no teste.

// EXERCÍCIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// 2.a) O presente programa demonstra o valor da frutra escolhida, e mostra ao usuário qual fruta foi escolhida,
// e qual o preço da fruta conforme os casos colocados. Se nenhuma das frutas listadas foram escolhidas, o preço
// genérico é de 5 reais. 
// 2.b) A mensagem para a escolha da fruta maçã será: "O preço da maçã é de R$2.25"
// 2.c) Se ocorrer a remoção do break o código continuaria rodando e o valor impresso para a pera seria de R$5.


// // EXERCÍCIO 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// //3.a) A primeira linha do código transforma o string inserido pelo usuário no prompt em um number. 
// //3.b) Se fosse inserido o número 10 a mensagem que iria ser impressa seria "Esse número passou no teste".
// // Se fosse escolhido o número -10 provavelmente ada iria aparecer. 
// // 3.c) Sim, há um erro existente no console, isto porque o escopo global declara apenas a variável numero.
// // Não há, porém, a declaração da variável mensagem fora do escopo condicional. Assim sendo, torna-se impossível
// // à mensagem ser exibida por impossibilidade de acesso ao escopo filho. 

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Exercícios de escrita de código

// EXERCÍCIO 4

// const idade = Number(prompt("Qual a sua idade?"));

// if (idade >= 18){
//     console.log("Você pode dirigir")
// }   
// else if (idade < 18){
//     console.log("Você não pode dirigir")
// }
// else {
//     console.log("Opps...tente outra vez com números!")
// }

// EXERCÍCIO 5

// const turno = prompt("Digite a letra identificadora do seu turno de estudos: M - Matutino, V - Vespertino ou N - Noturno");

// if (turno === 'M'){
//     console.log("Bom dia!")
// }   
// else if (turno === 'V'){
//     console.log("Boa tarde!")
// }   
// else if (turno === 'N'){
//     console.log("Boa noite!")
// }
// else {
//     console.log("Opps...tente outra vez utilizando M, V ou N")
// }

// EXERCÍCIO 6

// const turno = prompt("Digite a letra identificadora do seu turno de estudos: M - Matutino, V - Vespertino ou N - Noturno");

// switch (turno){
//     case "M":
//         console.log("Bom dia!")
//     break
//     case 'V':
//         console.log("Boa tarde!")
//     break
//     case 'N':
//         console.log("Boa noite!")
//     break
//     default:
//     console.log("Opps...tente outra vez utilizando M, V ou N")
//     break
// }

// EXERCÍCIO 7

// let filme = prompt("Qual gênero de filme você irá assistir")
// let preco = Number(prompt("Qual o preço do ingresso?"))


// if (filme === "Fantasia" && preco < 15){
//     console.log("Enjoy your movie!")
// }
// else {
//     console.log("Find another movie :(")
// }

// DESAFIOS

// DESAFIO 01

// const filme = prompt("Qual gênero de filme você irá assistir")
// const preco = Number(prompt("Qual o preço do ingresso?"))

// if (filme === "Fantasia" && preco < 15){
    
//     let snack = prompt("Qual snack você irá comprar?")
//     console.log("Enjoy your movie!", "...com", snack)
// }

// else {
//     console.log("Find another movie :(")
// }

// DESAFIO 02

// Array das perguntas
let perguntas = [
    'Qual o seu nome?', 
    'Qual tipo de jogo? Escreva: IN (internacional) ou DO (doméstico)',
    'Qual etapa do campeonato? Escreva: SF (semi-final), DT (decisão de terceiro lugar) ou FI (final)',
    'Qual categoria você deseja? Escolha: 1, 2, 3 ou 4',
    'Quantos ingressos serão?'
]

// Prompt das perguntas
const nome = prompt(perguntas[0])
const tipoJogo = prompt(perguntas[1])
const etapa = prompt(perguntas[2])
let categoria = Number(prompt(perguntas[3]))
let  quantidadeIngressos = Number(prompt(perguntas[4]))

// Definição dos preços por categoria
let precoCategoria01 = [
    1320,
    660,
    1980
]
let precoCategoria02 = [
    880,
    440,
    1320
]
let precoCategoria03 = [
    550,
    330,
    880
]
let precoCategoria04 = [
    220,
    170,
    330
]

// Definição do valor do ingresso unitário

let valorUnitario;

// Condições de valor unitário para categoria 01
if(tipoJogo==='DO' && etapa === "SF" && categoria==="1"){
    valorUnitario = precoCategoria01[0]
}
if(tipoJogo==='DO' && etapa === "DT" && categoria==="1"){
    valorUnitario = precoCategoria01[1]
}

if(tipoJogo==='DO' && etapa === "FI" && categoria==="1"){
    valorUnitario = precoCategoria01[2]
}

// Condições de valor unitário para categoria 02
if(tipoJogo==='DO' && etapa === "SF" && categoria==="2"){
    valorUnitario = precoCategoria02[0]
}
if(tipoJogo==='DO' && etapa === "DT" && categoria==="2"){
    let valorUnitario = precoCategoria02[1]
}

if(tipoJogo==='DO' && etapa === "FI" && categoria==="2"){
    valorUnitario = precoCategoria02[2]
}

// Condições de valor unitário para categoria 03
if(tipoJogo==='DO' && etapa === "SF" && categoria==="3"){
    valorUnitario = precoCategoria03[0]
}
if(tipoJogo==='DO' && etapa === "DT" && categoria==="3"){
    valorUnitario = precoCategoria03[1]
}

if(tipoJogo==='DO' && etapa === "FI" && categoria==="3"){
    valorUnitario = precoCategoria03[2]
}

// Condições de valor unitário para categoria 04
if(tipoJogo==='DO' && etapa === "SF" && categoria==="4"){
    valorUnitario = precoCategoria04[0]
}
if(tipoJogo==='DO' && etapa === "DT" && categoria==="4"){
    valorUnitario = precoCategoria04[1]
}

if(tipoJogo==='DO' && etapa === "FI" && categoria==="4"){
    valorUnitario = precoCategoria04[2]
}


// Condições para a definição do preço total

let valorTotal;

// Condições para valor total - Etapa SF

if (tipoJogo === "DO" && etapa === "SF" && categoria === "1"){
    valorTotal = quantidadeIngressos*precoCategoria01[0]
}

else if (tipoJogo === "DO" && etapa === "SF" && categoria === "2"){
    valorTotal = quantidadeIngressos*precoCategoria02[0]
}

else if (tipoJogo === "DO" && etapa === "SF" && categoria === "3"){
    valorTotal = quantidadeIngressos*precoCategoria03[0]
}

else if (tipoJogo === "DO" && etapa === "SF" && categoria === "4"){
    valorTotal = quantidadeIngressos*precoCategoria04[0]
}

// Condições para valor total - Etapa DT

if (tipoJogo === "DO" && etapa === "DT" && categoria === "1"){
    valorTotal = quantidadeIngressos*precoCategoria01[1]
    }
    
    else if (tipoJogo === "DO" && etapa === "DT" && categoria === "2"){
    valorTotal = quantidadeIngressos*precoCategoria02[1]
    }
    
    else if (tipoJogo === "DO" && etapa === "DT" && categoria === "3"){
    valorTotal = quantidadeIngressos*precoCategoria03[1]
    }
    
    else if (tipoJogo === "DO" && etapa === "DT" && categoria === "4"){
    valorTotal = quantidadeIngressos*precoCategoria04[1]
    }

// Condições para valor total - Etapa FI

if (tipoJogo === "DO" && etapa === "FI" && categoria === "1"){
    valorTotal = quantidadeIngressos*precoCategoria01[2]
    }
    
    else if (tipoJogo === "DO" && etapa === "FI" && categoria === "2"){
    valorTotal = quantidadeIngressos*precoCategoria02[2]
    }
    
    else if (tipoJogo === "DO" && etapa === "FI" && categoria === "3"){
    valorTotal = quantidadeIngressos*precoCategoria03[2]
    }
    
    else if (tipoJogo === "DO" && etapa === "FI" && categoria === "4"){
    valorTotal = quantidadeIngressos*precoCategoria04[2]
    }

console.log("---Dados da compra---")
console.log('Nome do cliente:', nome)
console.log('Tipo do jogo:', tipoJogo)
console.log('Etapa do jogo:', etapa)
console.log('Categoria:', categoria)
console.log('Qt. de ingresso', quantidadeIngressos)
console.log('---Valores---')
console.log('Valor do ingresso: R$', valorUnitario)
console.log('Valor total R$', valorTotal)
