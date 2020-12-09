

function salvaTudo(){

    var titulo = document.getElementById("titulo-post");
    let userTitulo = [titulo.value];

    var autor = document.getElementById("autor-post");
    let userAutor = [autor.value];

    var conteudo = document.getElementById("conteudo-post");
    let userConteudo = [conteudo.value];
    
    // Emite um alerta se o usuário deixar em branco
    if(userTitulo.length == ''  | userAutor.length == '' | userConteudo.length  == ''){
        
        alert('Você deixou algum campo em branco!');
        
        return false
    }

    //Salva o conteúdo 
    else {
    
    var titulo = document.getElementById("titulo-post");
    let userTitulo = [titulo.value];

    var autor = document.getElementById("autor-post");
    let userAutor = [autor.value];

    var conteudo = document.getElementById("conteudo-post");
    let userConteudo = [conteudo.value];


        var text = {
            title: userTitulo,
            author: userAutor,
            content:userConteudo
        }
        
        var i;
        
        for (i = 0; i < userTitulo.length ;i++) {
        text += userTitulo.elements[i].value + "<br>";
        }

        document.getElementById("container-de-posts").innerHTML = text.title;

        for (i = 0; i < userAutor.length ;i++) {
            text += userAutor.elements[i].value + "<br>";
        }
        
        document.getElementById("container-de-posts").innerHTML = text.author;
        
        for (i = 0; i < userConteudo.length ;i++) {
            text += userConteudo.elements[i].value + "<br>";
        }  

        document.getElementById("container-de-posts").innerHTML = text.content;
    }        

}

