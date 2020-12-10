

function salvaTudo(){

    var titulo = document.getElementById("titulo-post");
    let userTitulo = titulo.value;

    var autor = document.getElementById("autor-post");
    let userAutor = autor.value;

    var conteudo = document.getElementById("conteudo-post");
    let userConteudo = conteudo.value;
    

    // Emite um alerta se o usuário deixar em branco
    if(userTitulo.length == ''  | userAutor.length == '' | userConteudo.length  == ''){
        
        alert('Você deixou algum campo em branco!');
        
        return false
    }

    //Salva o conteúdo 
    else {
    
        const text = {
            title: [userTitulo],
            author: [userAutor],
            content:[userConteudo]
        }
        
        console.log('Eu sou o título', text.title)
        console.log('Eu sou o autor', text.author)
        console.log('Eu sou o conteúdo', text.content)
       
        let i;
        
        for (i = 0; i < titulo.length; i++) {
        text += titulo.elements[i].value;
        }

        let j;

        for (j = 0; j < autor.length; j++) {
            text += autor.elements[j].value;
        }
        
        let k;
        
        for (k = 0; k < conteudo.length; k++) {
            text += conteudo.elements[k].value;
        }  

        document.getElementById("container-de-posts").innerHTML = `<p class="item">${text.title}</p>`+ 
        `<p class="item">${text.author}</p>` + `<p class="item">${text.content}</p>`;
        
        
        titulo.value = ""

        autor.value = ""

        conteudo.value = ""

    }        

}


