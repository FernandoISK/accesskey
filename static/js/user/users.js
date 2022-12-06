const API_URL = "http://apiaccesskey.somee.com/api/Usuario/"

const loadIndex = () =>{
    fetch(`${API_URL}get`)
    .then(respone => respone.json())
    .then(data => fillTable(data))
    .catch(error => console.log(error))
}
$("#save").on("click", function (e) {
    contraseña = $("#inputPassword").val();
    rContraseña = $("#inputRPassword").val();
    if(contraseña == rContraseña ){
        Nombre = $("#inputFirstName").val();
        Segundonombre = $("#inputMiddleName").val();
        Apellidopaterno = $("#inputPaternalSurname").val();
        Apellidomaterno = $("#inputMaternalSurname").val();
        Usuario = $("#inputUsername").val();
        var data = {nombre: Nombre ,segundonombre: Segundonombre,apellidopaterno: Apellidopaterno,apellidomaterno: Apellidomaterno,usuario: Usuario,contraseña: rContraseña};
        fetch(`${API_URL}agregar`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => toastr.error('No se pudo agregar al usuario.'))
          .then(response => toastr.success('Usuario agregado correctamente.'));
    }
    else{
            toastr.Warning('La contraseña no coicide.')
    }
    
})
const addUser = () =>{
    
}
const fillTable = (data) =>{
    let body = ''
    for(let i = 0; i < data.length; i++){
        let action = `<td><div class="input-group-prepend">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
    Action </button> <ul class="dropdown-menu"> <li class="dropdown-item"><a href="#">Edit</a></li>
    <li class="dropdown-item"><a onclick="Delete('${data[i].id}')">Delet </a></li></ul></div></td>`
        body += `<tr><td>${data[i].nombre} ${data[i].segundonombre}</td><td>${data[i].apellidopaterno} ${data[i].apellidomaterno}</td><td>${data[i].usuario}</td>${action}</tr>`
    }
    document.getElementById("tbodyData").innerHTML = body
}      

const Delete = (id) =>{
    fetch(`${API_URL}Eliminar?id=${id}`,{
        method: 'DELETE'
    })
    .then(respone => respone.json())
    .then(data => loadIndex())
    .catch(error => console.log(error))
}