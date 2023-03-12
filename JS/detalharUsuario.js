//Mostrar e-mail do usuario logado
/* $(document).ready(function(){
    mostraEmailUsuarioLogado();

}) */

//Primeiro vamos cria o método sem utilizar o parametro da URL
//Vamos pegar um parâmetro estático
function mostrarDadosUsuario(){

    //Ler trecho de url com javascript
    var searchParams = new URLSearchParams(window.location.search);
    //para pegar o e-mail, basta colocar a chave
    var emailDoUsuario = searchParams.get("email");
    console.log(emailDoUsuario)

    //a Linha abaixo é quando o e-mail era colocado na mão
    //var emailDoUsuario = 'emailum@mail.com';

    var usuarioEncontrado = listadefuncionarios.find(function(usuario,inidiceNoArray){
        return usuario.email == emailDoUsuario;
    })

    if(usuarioEncontrado){
        $("#nome").html(usuarioEncontrado.name);
        $("#email").html(usuarioEncontrado.email);
        $("#telefone").html(usuarioEncontrado.phone_number);
        $("#cargo").html(usuarioEncontrado.role);
        
    } else{
        //alert("E-mail inválido, por favor tente novamente");
        //document.location = 'listaDeUsuarios.html';
    }

    //console.log(usuarioEncontrado)
}

$(document).ready(function(){
    mostrarDadosUsuario();

})