// ----------------------------- Exercícios de interpretação de código -----------------------------//

// EXERCÍCIO 01

    /* Esse código irá realizar a conversão de um valor em dólar para reais. O usuário inserirá o valor de cotação 
no prompt que surgirá para ele requerendo o valor de cotação. No exemplo, considerando que o valor do parâmetro inserido
 na função foi de 100 dólares, o resultado final será 100 vezes o valor da cotação fornecida pelo usuário que saberá quanto
 dinheiro tem em reais através do console.*/

// EXERCÍCIO 02

    /* Trata-se de um programa que mostrará no console os valores após um dado investimento. A função apresenta dois 
 parâmetros 'tipoDeInvestimento' e 'valor', e, após passar por casos possíveis, retorna o valor após o investimento.
 É uma espécie de calculadora utilizando o switch como fator que estabelece a condicional. Se o usuário escolhe saber
 os rendimentos da Poupança, Renda Fixa, CDB ou Ações, bastará inserir o tipo de investimento desejado seguido do valor
 a ser investido e o programa mostrará o resultado. No exemplo dado, O primeiro valor a ser impresso no console será
 que o investimento foi em ações 'trasnformará' o valor inserido em 165. E o segundo montante, investido em tesouro
 direto imprimirá um alert para o usuário informando que a opção tesouro direto é incorreta.*/

// EXERCÍCIO 03

    /* O programa analisa e seleciona os números existentes na constante números que é um array. A seleção ocorre na função for
 que analisa se o número é divisível por 2 com resto 0, ou seja, par. Caso fique configurado que o número tem resto da divisão
 por 2 igual a zero ele será inserido na constante array1, caso seja ímpar, o número será inserido no array2. Por fim, 
 o console irá exibir apenas o tamanho dos arrays, ou seja, quantos elementos existem no array numeros, quantos foram incluídos
 no array1 (ou seja, pares) e quantos foram incluídos no array2 (ou seja, ímmpares) */

// EXERCÍCIO 04

    /* O programa define três variáveis, uma definida com x números e outras duas com propriedades de infinitos números e
 e outra igual a zero. A função for analisará cada número do array numeros e, caso o número não seja parte do conjunto dos
 números infinitos e não nulos ele será parte da variável numero1. Se o número for acima de 0 será parte da variável numero2.
 o console irá imprimir o valor da variável numero1 igual a -10 e para a variável numero2 o valor 1590 que é o maior número
 do array de números.*/


// ----------------------------- Exercícios de Lógica de Programação ------------------------------//

// EXERCÍCIO 01
    /* Existem diversas maneiras de se percorrer um array. Essas iterações são o que chamamos de loopings, são comandos
 que se repetem para cada elemento do array que é uma lista de elementos. Dessa forma pode-se percorrer os elementos de
 um array utilizando-se dos comandos while, for, for...of, forEach, forMap, for Filter e outras mais. O looping while é
 a estrutura mais 'primitiva' a repetição, trata-se de uma repetição constante de uma ação considerando dada coondição 
 de ocorrência. O for é uma simplifcação da estrutura do while, menos passível de ocorrer um laço infinito, e que permite
 realizar a repetição utilizando-se a estrutura de começo, condição de continuação e o incrimento. O for...of é a expressão
 'para cada', ou seja, uma simplificação ainda maior da repetição de análise item a item de um dado array. As outras formas
 são funções específicas para utilização em arrays, como o caso do for...of, e que criam novos arrays, modificando ou não
 o array principal. Seguindo aos exemplos dessas formas teremos os seguintes códigos:*/

    //EXEMPLO 01 
 function exemplo1() {

    let exemploWhile = [1, 2, 3, 4, 5, 6]

    let numeros = 0

    let i = 0

    while ( numeros < 5) {
        
        numeros = arrayExemplo [i]
    
        console.log('Eu sou o indice do arrayExemplo:',i)
        console.log ('Eu sou a variável numeros:', numeros)
    
        i++
    }
 }
    // EXEMPLO 02
 function exemplo2(){
    const exemploForOf = [30, 15, 70, 54, 100, 347, 21, 2, 37, 45, 28] 

    let par = []

    for (let x = 0; x <= exemploForOf.length; x++) {

        if (exemploForOf[x] % 2 === 0){
            
            par.push (exemploForOf [x])
            console.log(par)    
        }
        
    }
 }
// EXERCÍCIO 02
    
    // const booleano1 = true
    // const booleano2 = false
    // const booleano3 = !booleano2 = true
    // const booleano4 = !booleano3 = false
    
    /*
    a) booleano1 && booleano2 && !booleano4

        As constantes booleano1, booleano2 e !booleano4 tem valor respectivo de true, false e true. 
        A operação devolveria 'false', pois em casos de && só devolve true se todos os booleanos forem true.
    
    b) (booleano1 && booleano2) || !booleano3

        O valores seriam booleano1 = true, booleano2 = false, booleano3 = false, dessa forma será devolvido 'false', pois
        o operador || devolve 'false' em caso de todos serem 'false'. O resultado da operação entre parênteses é 'false' e
        e o resultaod da negação do booleano3 é 'false', logo ambos são false.

    c)  (booleano2 || booleano3) && (booleano4 || booleano1)

        Os resultados serão: (true), (true). Logo o resultado devolvido final será true. 

    d) !(booleano2 && booleano3) || !(booleano1 && booleano3)

        Os resultados serão: (true), (false). Resultado final será true. 

    e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

        Os resultados serão: (false) e (false) ou  (true). Resultado final será true dado o operador ||   
    */

// EXERCÍCIO 03

    // O código apresentado pelo colega não funciona. Isto porque não havia incremento na estrutura do código. 
    function exercicio3 (x){
        const quantidadeDeNumerosPares = x 
        
        let i = 0
        
        while(i <= quantidadeDeNumerosPares) {
        
        i++
            console.log(i*2)
        }
    }

// EXERCÍCIO 04 
   
    let confereTriangulo = (a, b, c) => {    
          
     if ( a === b && b === c) {
        console.log("É um triângulo Equilátero!")
     }

     else if ( (a === b || a===c || b===c)  && (a!== c || b!==a || b!==c)) {
        console.log("É um triângulo Isósceles!")
     }    
        
     else {
        console.log("É um triângulo Escaleno!")
     }
    }

// EXERCÍCIO 05 

    function doisNumeros(n, m) {
       
        // 1. indica maior
        if (n > m){
            console.log('O maior é:', n)
        }
        else {
            console.log('O maior é:', m)
        }
        // 2. indica divisibilidade do primeiro
        if (n % m === 0){
            console.log(n, 'é divisível por', m)
        }

        else if (n % m !== 0){
            console.log(n, 'não é divisível por', m)
        }
        // 2. indica divisibilidade do segundo
        if (m % n === 0){
            console.log(m, 'é divisível por', n)
        }

        else if (m % n !== 0){
            console.log(m, 'não é divisível por', n)
        }

        let subtracao1 = n - m
        let subtracao2 = m - n

        if (subtracao1 > 0) {
            console.log('A diferença entre eles é', subtracao1)
        }

        else if (subtracao2 > 0){
            console.log('A diferença entre eles é', subtracao2)
        }
    }
   
// ----------------------------------- Exercícios de Funções --------------------------------------//
    // EXERCÍCIO 01

    function segMaiorsegMenor(arrayNumeros){
        
        let maiorNum = -Infinity;
        let menorNum = Infinity;

        let segNumMaior = -Infinity;
        let segNumMenor = Infinity;

        for (let j = 0; j <= arrayNumeros.length; j++) {

            if (arrayNumeros[j] > 0){
                maiorNum = arrayNumeros[j]
            }

            else if (arrayNumeros[j] <= 0 ){
                menorNum = arrayNumeros[j]
               
            }
        }

        console.log(maiorNum)
        console.log(menorNum)  

        for (let j = 0; j <= arrayNumeros.length; j++){
            if ( arrayNumeros[j] > segNumMaior && arrayNumeros[j] < maiorNum ){
                segNumMaior = arrayNumeros[j]
            }

            else if (arrayNumeros[j] < segNumMenor && arrayNumeros[j] > menorNum ){
                segNumMenor = arrayNumeros[j]
               
            }
              
        }  
     
        console.log(segNumMaior)
        console.log(segNumMenor)
    } 

    // EXERCÍCIO 02

    let Hi = () => { 
        
     return alert("Oi Labenu!")
      
    }

// ----------------------------------- Exercícios de Objetos --------------------------------------//
    // EXERCÍCIO 01
        /* Array e Obejtos são muito similares no que diz respeito a listagem de elementos. O próprio JavaScript retorna 
    o tipo array como um objeto. Enfim, o array é essa lista que coisas podem ser incrementadas, removidas dentro e que a
    organização ocorre basicamente pelo índice atribuído àquele elemento. Os objetos, como dito em sala, são como um gaveta
    com dividósrias, é uma forma de listar e oraganizar elementos, coisas, funções de modo que seja possível acessar cada
    um destes rapidamente com apenas a utilização da notação de ponto. Enfim, cada um apresenta uma funcionalidade o que permite
    felxibilidade dentro do código. Se minha necessidade é de uma listagem simples não justifica a utilização de objeto, isto porque
    há certa complexidade para a manipulação dessa funcionalidade. O array permite essa listagem rápida, e de modo mais simples. 
    Porém, em caso de complexidade no armazenamento de informações, ou mesmo maior detalhamento do que está sendo inserido
    a funcionalidade do objeto permitirá maior facilidade em ordenar e listar o que for necessário.
    */

    // EXERCÍCIO 02

    function criaRetangulo (lado1,lado2) {

        const Retangulo = {
         largura: lado1, 
         altura: lado2, 
         perímetro: 2*(lado1 + lado2), 
         área: lado1*lado2
        }
        
        return Retangulo
    }

    // EXERCÍCIO 03
    
    function filmeFavorito (){

        const filme = {
        
         titulo:"Escritores da Liberdade",
         ano: 2007,
         diretor: "Richard LaGravenese",
         atores: ["Hilary Swank", "Patrick Dempsey", "Imelda Staunton", "Scott Glen"]

        }
        
        var resultado = `Venha assistir ao filme ${filme.titulo} de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
        
        return resultado
    }
    // EXERCÍCIO 04

    const pessoaAvulsa = {
        nome: "Frederico",
        idade: 30,
        email: "fred@amazon.com",
        endereco: "Rua Nova, nº 35"
    }

    function anonimizar(pessoa){

        return {
            nome: "ANONIMO",
            idade: pessoaAvulsa.idade,
            email: pessoaAvulsa.email,
            endereco: pessoaAvulsa.endereco
        }
    }
    
    
// ------------------------------- Exercícios de Funções de Array ---------------------------------//

// EXERCÍCIO 01

    let arrayDePessoas = [
	    { nome: "Pedro", idade: 20 },
	    { nome: "João", idade: 10 },
	    { nome: "Paula", idade: 12 },
	    { nome: "Artur", idade: 89 } 
    ]

    //a) RETORNA ADULTOS  
    const adultos = arrayDePessoas.filter((pessoa) =>{
        return pessoa.idade >= 20
      })

    //b) RETORNA CRIANÇAS  
    const criancas = arrayDePessoas.filter((pessoa) =>{
        return pessoa.idade < 20
     })
    
// EXERCÍCIO 02

 const arrayTeste = [1, 2, 3, 4, 5, 6]
    
 //  a) MUTIPLICA POR 2
     const multiplicaPor2 = arrayTeste.map((e) => {
        return e*2
    })

 //  b) MUTIPLICA POR 3

    const multiplicaPor3 = arrayTeste.map((e) => {
        let arrayPor3 = e*3
        return arrayPor3.toString()
    })

 // c) Diz PAR ou ÍMPAR

  const parOuImpar = arrayTeste.map((e) => {
        
        if ( e % 2 === 0){
        return impar = `${e} é par.`
        }

        else {
        return impar = `${e} é impar.`
        }  
    })
// EXERCÍCIO 03
    const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
    ]

    // a) Filtro de permissão de entrada no brinquedo

    const permitidos = pessoas.filter((filtraP) =>{
        if (filtraP.altura >= 1.5 && 60 > filtraP.idade && filtraP.idade > 14){

        return filtraP.nome
        }
    })

    // b) Pessoas que não podem entrar no brinquedo

    const naoPermitidos = pessoas.filter((filtraP) =>{
        if (filtraP.altura < 1.5 || 60 < filtraP.idade || filtraP.idade < 14){

        return filtraP.nome
        }
    })

// EXERCÍCIO 04

    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    const emails = consultas.map((consulta) => {
        
        let emailFinal = "Olá, "
      
            if(consulta.cancelada) {
            
             if(consulta.genero === "feminino") {
             emailFinal += "Sra. "
             } 
            
             else {
             emailFinal += "Sr. "
             }
        
             emailFinal += consulta.nome + ". "
             emailFinal += "Estamos enviando esta mensagem para "
        
             if(consulta.genero === "feminino") {
                emailFinal += "lembrá-la "
             } 
             
             else {
                emailFinal += "lembrá-lo "
             }
        
             emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
             emailFinal += "Por favor, acuse o recebimento deste-email."
            } 
            
            else {
        
             if(consulta.genero === "feminino") {
                emailFinal += "Sra. "
             } 
             else {
                emailFinal += "Sr. "
             }
        
             emailFinal += consulta.nome + ". "
             emailFinal += "Infelizmente sua consulta marcada para o dia "
        
             emailFinal += consulta.dataDaConsulta + " foi cancelada. "
             emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
            }
            
            return emailFinal
    })



