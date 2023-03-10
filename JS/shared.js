//chamar o e-mail do usuario na nav bar

function mostraEmailUsuarioLogado(){
    var usuarioLogado = localStorage.getItem("usuarioLogado")
    //não consigo trabalhar com texto, então transformo em obj
    var usuarioLogadoObject = JSON.parse(usuarioLogado);
    $("#userLogged").html(usuarioLogadoObject.email);
    //console.log($("#userLogged").html(""))
}

//para fazer o logout é semelhante o login
// vamos usar o "local storage", vamos mudar apenas o comando

function logout(){
    localStorage.removeItem("usuarioLogado");
    document.location = "login.html";
}


//sempre que eu quiser verificar se uma variável não tem valor
//colocar a exclamação na frente

function verificaSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        document.location= "login.html"
        //dessa forma se ele não tiver logado, vai voltar sempre 
        //para a página de login
    }
}


//fora pq o  JQUERY não precisa estar totalmente carregado
verificaSeOUsuarioEstaLogado();


$(document).ready(function(){

    mostraEmailUsuarioLogado();
    //preencheListaDeUsusarios();
    $("#logout").click(function(){
        //alert("O BOTÃO FOI CLICADO")
        logout();
    })
})


/* $(document).ready(function(){
    mostraEmailUsuarioLogado();


    
}) */