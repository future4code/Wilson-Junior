

// Greeting Message

const Oi = console.log('Bem vindo ao jogo Blackjack!')

// Início do jogo

if(confirm("Quer iniciar uma nova rodada?")) {

// Definição das cartas
   
   const card1 = comprarCarta()
   
   const card2 = comprarCarta() 
   
   const card3 = comprarCarta()
   
   const card4 = comprarCarta()

// Distirbuição das cartas para cada mão e cálculo de valor

   let userHand =[card1.texto, card2.texto, card1.valor, card2.valor]
   let totalUserhand = Number(card1.valor+card2.valor)
   let pcHand = [card3.texto, card4.texto, card3.valor, card4.valor]
   let totalPChand = Number(card3.valor+card4.valor)

// Mensagens no console

   console.log('Usuário - cartas:', userHand[0], userHand[1], '- pontuação', totalUserhand)

 
   console.log('Computador - cartas:', pcHand[0],pcHand[1], '- pontuação', totalPChand)

// Condições para empate, vencedor ou perdedor

   if  (totalUserhand === totalPChand){

      console.log ('Tivemos um empate!')
   }

   else if (totalUserhand > totalPChand){

      console.log ('O Usuário venceu!')
   }

   else if (totalUserhand < totalPChand){

      console.log ('O Computador venceu!')
   }
 
}   

// Caso o usuário não queira mais jogar

else {
	let bye = console.log('O jogoacabou =(')
}

