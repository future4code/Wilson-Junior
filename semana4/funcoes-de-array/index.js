let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((despesas) => {
        divDespesas.innerHTML += `<p> Valor: R$${despesas.valor} | Tipo: ${despesas.tipo} | Descrição: ${despesas.descricao}</p>`
    }) 

}

// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
// Filtra o Array arrDespesas e salva os objetos que são do tipo alimentação reservando o valor gasto na variável valorAlimentaçao
    const alimentacao = arrDespesas.filter((despesas)=>{
        return despesas.tipo === "alimentação"
    })

    const valorAlimentacao = alimentacao.map((nome, index, lista)=>{
        return nome.valor
    })
    console.log(alimentacao)
    console.log(valorAlimentacao)
// Filtra o Array arrDespesas e salva os objetos que são do tipo utilidades reservando o valor gasto na variável valorUtilidades
    const utilidades = arrDespesas.filter((despesas)=>{
     return despesas.tipo === "utilidades"
    })

    const valorUtilidades = utilidades.map((nome, index, lista)=>{
     return nome.valor
    })
    console.log(utilidades)
    console.log(valorUtilidades)
// Filtra o Array arrDespesas e salva os objetos que são do tipo viagens reservando o valor gasto na variável valorViagem
    const viagem = arrDespesas.filter((despesas)=>{
     return despesas.tipo === "viagem"
    })

    const valorViagem = viagem.map((nome, index, lista)=>{
     return nome.valor
    })
    console.log(viagem)
    console.log(valorViagem)




    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}