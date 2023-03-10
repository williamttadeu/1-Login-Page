



function preencheListaDeUsusarios(){

    var tableusada = $("#userTable")//id da tabela

    //console.log(tableusada);
    
    listadefuncionarios.map(function(user,indexArray){

        tableusada.find("tbody").append(`
            <tr>
                <td>${user.email} </td>
                <td>${user.name} </td>
                <td> <a href='detalharUsuario.html?email=${user.email}'>visualizar</a> </td>
            </tr>
        
        `)

        console.log(user)

    })
}

$(document).ready(function(){
    preencheListaDeUsusarios();
})




