

// Greeting Message

const Oi = console.log('Bem vindo ao jogo Blackjack!')

// Início do jogo

if(confirm("Quer iniciar uma nova rodada?")) {

// Definição das cartas
   
   const card1 = comprarCarta(), card2 = comprarCarta(), card3 = comprarCarta(), card4 = comprarCarta()

// Distirbuição das cartas para cada mão e cálculo de valor

   let userHand =[card1, card2]
   let totalUserhand = Number(card1.valor+card2.valor)
   let pcHand = [, card3, card4]
   let totalPChand = Number(card3.valor+card4.valor)

// Mensagens no console

   console.log('Usuário - cartas:', card1.texto, card2.texto, '- pontuação', totalUserhand)
   console.log('Computador - cartas:', card3.texto, card4.texto, '- pontuação', totalPChand)

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

