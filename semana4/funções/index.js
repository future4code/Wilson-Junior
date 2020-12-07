//-----------------------------Exercícios de interpretação de código--------------------------------------------------//

// EXERCÍCIO 01

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// 01.a) O console irá imprimir a multiplicação do valor atribuído no parâmetros inclusos, ou seja, 10 e 50 que são
// o resultado da multiplicação por 5. 
// 
// b) Se fossem retirados os dois console.log e apenas fizessemos o chamado da função possivelmente será impresso no
// console o valor da última multiplicação (50).

// EXERCÍCIO 02 
// let arrayDeNomes = ["Amanda", "Caio"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes);

// 2. a) As saídas que serão impressas no console serão apenas os dois primeiros elementos da variável arrayDeNomes.
// b) Serão impressos apenas esses dois nomes, Amanda e Caio.

// EXERCÍCIO 03

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }


//   A presente função está criando um array vazio que será preenchido por números que tenham o resto da divisão
//   por 2, ou seja, números pares, incluídos no arrayFinal multiplicados por eles mesmo. O melhor nome seria: criaArrayNumsPar²

//-----------------------------Exercícios de escrita de código--------------------------------------------------//

// EXERCÍCIO 04


// a)

// function escreveInfos() {
//     console.log ("Eu sou Will, tenho 27 anos, moro em Belo Horizonte e sou advogado e estudante.")
// } 

// escreveInfos()

// b) 

// function escreveInfosRecebidas(nome, idade, cidade, estudante) {
    
//     nome  = prompt("Qual seu nome?")
//     idade = Number(prompt("Qual a sua idade"))    
//     cidade = prompt("Qual cidade você mora?'")
//     estudante = prompt("Você é estudante?")

        
//     if (estudante === "sim"){
//         estudante = "sou estudante!"
//     }
    
//     else {
//         estudante = "não sou estudante"
//     }

//     console.log ("Eu sou", nome, 'tenho', idade, 'anos, moro em', cidade, 'e', estudante );

// } 

// escreveInfosRecebidas()

// EXERCÍCIO 05

// a)
// function soma2numeros(num1,num2){
    
//     const soma = num1 + num2
    
//     return soma
// }

// let resultado = soma2numeros()

// console.log(resultado)

// b)

// function confereNumeros(num1,num2){
        
//     if(num1>num2){
//         var maior = true
//         console.log('O primeiro número é o maior')
//         return maior 
//     }
    
//     else if(num1===num2) {
//        var igual = true
//         console.log('O primeiro número é igual ao segundo')
//         return igual
//     }
//     else {
//         console.log('O primeiro número é menor que o segundo.')
//     }
// }

// c) 

// function escreveDezvezes (texto){

//    texto = [prompt("Escreva alguma coisa!")]

//    for(let i=0; i < 11; i++)

//    console.log(texto)
   
// }

// escreveDezvezes()
