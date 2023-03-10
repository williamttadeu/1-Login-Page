

verificaSeOUsuarioEstaLogado();

//Criar função que vai receber Login e Senha digitados pelo usuário
function fazerLogin(emailDigitado,senhaDigitada){

    //find encontra itens na lista de acordo com parâmetros que vc enviar
    var uservalido = listadefuncionarios.find(function(funcionario, posicaoNaLista){
        return funcionario.email == emailDigitado &&
        funcionario.password == senhaDigitada;

        })

//quando só coloco a variável, estou verificando se ela tem algum valor
    if(uservalido){
        salvarUsuario(uservalido);
        document.location = "listaDeUsuarios.html"
        //alert('Usuario foi encontrado')

    } else{
        $("#form-login-alert-error").css("display", "block");
        setTimeout(function(){
            $("#form-login-alert-error").css("display", "none");

        },6000)
    }

}


function salvarUsuario(usuario){

    var usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem("usuarioLogado",usuarioJSON)

}

function verificaSeOUsuarioEstaLogado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');

    if(usuarioLogado){
        document.location= "listaDeUsuarios.html"
    }
}



$(document).ready(function(){

//para imprimir todos eu uso o map
//map precisa de duas funções
/*                 listadefuncionarios.map(function(funcionario,posicaoNoArray){
        console.log(funcionario)
    })

    console.log(listadefuncionarios[2]) */

$('#form-login').submit(function(event){
    event.preventDefault();
    
    var emailDigitado = $("#inputEmail").val();
    var senhaDigitada = $("#inputPassword").val();

    fazerLogin(emailDigitado, senhaDigitada);

    
})
})