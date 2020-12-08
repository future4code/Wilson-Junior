// Exercícios de interpretação de código

// EXERCÍCIO 01

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O código acima determinar um loopping para somar 1 a variável valor enquanto ela for menor que 5.
// Irá somar os valores de 1 a 4 e o resultado impresso será 10.

// EXERCÍCIO 02

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// O código acima imprimirá todos os valores constantes no array que sejam maiores que 18.
// O FOR é uma sintaxe própria para percorrer os elementos de um array, dessa forma, todos 
// os elementos estão sendo visitados. Para que todos sejam impressos será necessário remover o if.

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Exercícios de escrita de código

//EXERCÍCIO 3

// // 3.a

// const arrayOriginal = []
// for (let allElments of arrayOriginal) {
//   console.log(allElments)
// }

// 3.b

// const arrayOriginal = []
// for (let allElments of arrayOriginal) {
//   console.log(allElments/10)
// }

// 3.c

// const arrayOriginal = []
// let arrayPar = []

// for (let allElments of arrayOriginal) {
//     if (allElments%2 === 0){
//     arrayPar.push = allElments
//         console.log(arrayPar)
//     }
// }

// 3.d

// const arrayOriginal = []
// const arrayOriginal = [10, 15, 16, 33, 40, 50]
// for (let allElments of arrayOriginal) {
  
//   let i = arrayOriginal.indexOf(allElments)
  
//   console.log("O elemento do índex é", i,'é:', allElments)
// }


// 3.e
// const arrayOriginal = [10, 15, 16, 33, 40, 50, 200]
// let valorMaior = 0
// let valorMenor = arrayOriginal[0]
// for (let mNumero of arrayOriginal) {
  
//   if(mNumero>valorMaior){
//     valorMaior=mNumero
//   }
  
//   else if (mNumero<valorMenor){
//     valorMenor=mNumero
//   }
// }

// console.log('O maior número é', valorMaior, 'e o menor número é', valorMenor)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// DESAFIOS

// Desafio 01

// Variáveis

let meuNumero = prompt("Pense em um número jogador 1")

alert('Agora o jogador 2 deverá acertar qual número o jogador 1 está pensando!')

let palpite = prompt('Escolhar um número')

var ultimoResultado = [palpite]

var palpiteUsuario = Number(palpite);
  
  if (palpiteUsuario === meuNumero) {
    console.log('Wowwww... Você acertou!!! O número era', meuNumero)
  }

  else if (palpiteUsuario < meuNumero) {
      console.log('Seu palpite está muito baixo!');
      palpite

  } else if(palpiteUsuario > meuNumero) {
      console.log('Seu palpite está muito alto!');
      palpite
    }

