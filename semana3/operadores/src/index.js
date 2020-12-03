/* Exercícios de Interpretação de código 

Exercício 01

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

1.a) false
1.b) false 
1.c) true
1.d) boolean

Exercício 02

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19 
console.log('e. ', array)

const valor = array[i+6] - somará o elemento 0 com o número 6
console.log('f. ', valor)

2.a) undefined
2.b) null
2.c) 11
2.d) 3
2.e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
2.f) 9

*/

// Exercícios de escrita de código

// Exercício 01

let pergunta1= "Qual sua idade?"
let pergunta2= "Qual a idade de seu melhor amigo ou amiga?" 
 
let idadeUser= prompt(pergunta1);
let idadeFriend= prompt(pergunta2);

idadeUser= Number(idadeUser);
idadeFriend= Number(idadeFriend);

let resultado = Boolean(idadeUser>idadeFriend)
console.log('Sua idade é maior do que de seu amigo(a)', resultado)

const diferença = Number(idadeUser) - Number(idadeFriend)

console.log("A diferença das idades é", diferença)

// Exercício 02

let pergunta3= "Digite um número par";

numeroUser= prompt(pergunta3)
numeroUser= Number(numeroUser)
console.log(numeroUser%2);

// Todo o resto de número par divido por 2 deve ser 0

// O resta da divisão de número ímpar por 2 é igual a 1

// Exercício 03

let listaDeTarefas = []

let pergunta4= "Diga uma tarefa que você precise realizar"
let pergunta5= "Diga mais uma tarefa que você precise realizar"
let pergunta6= "Diga uma terceira tarefa que você precise realizar"

task01=prompt(pergunta4)
task02=prompt(pergunta5)
task03=prompt(pergunta6)


listaDeTarefas.push(task01)
listaDeTarefas.push(task02)
listaDeTarefas.push(task03)

console.log(listaDeTarefas)

let pergunta7= "Digite o índice da tarefa que você já cumpriu 0, 1 ou 2"
done1=prompt(pergunta7)


var removedItem = listaDeTarefas.splice(done1, 1);
console.log(listaDeTarefas)

// Exercício 04

let pergunta8= "Qual o seu nome?"
let pergunta9="Qual o seu e-mail?"

name=prompt(pergunta8)
emailDoUsuario=prompt(pergunta9)

console.log('O email', emailDoUsuario, 'foi cadastrado com sucesso. Seja bem-vindo(a)', name+'!')

// Desafios
