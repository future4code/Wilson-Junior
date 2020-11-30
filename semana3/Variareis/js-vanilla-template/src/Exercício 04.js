  // Exercício 04

  var comida = ['Feijão Tropeiro', 'Churrasco', 'Chocolate', 'Carne de Panela', 'Feijoada'];

  console.log(comida);

  var pref = "Essas são minhas comidas preferidas"

  console.log(pref);
  console.log(comida[0]);
  console.log(comida[1]);
  console.log(comida[2]);
  console.log(comida[3]);
  console.log(comida[4]);

 let pergunta1= "Qual sua comida favorita?"
 
 var nome= prompt(pergunta1);
 
 console.log ('1.'+ pergunta1);
 
 console.log ('Resposta: '+ nome);    

    removed = comida.splice(2, 1)
    comida.push(nome)
    comida
    console.log(comida);