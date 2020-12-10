

function criarTarefa (){
    
    let input = document.getElementById("tarefa")

    const userInput = input.value

    if(userInput.length == ''){
        alert('Você não incluiu sua tarefa!');
        
        return false
        }
        
    else {

    const weekDay = document.getElementById('dias-semana').value

    const divDay = document.getElementById(weekDay)

    divDay.innerHTML += `<p class="item">${userInput}</p>`

    clear.onclick = input.value =""

    return input
  }
}    

function clear(){

    let input = document.getElementById("tarefa").value
    let clear = document.getElementById("newTask")
    clear.onclick = input.value =""

}
