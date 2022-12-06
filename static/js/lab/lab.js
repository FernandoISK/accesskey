const API_URL = "http://apiaccesskey.somee.com/api/Laboratorio/"


$("#save").on("click", function (e) {
        Numero = $("#inputLaboratoryNumber").val();
        Edificio = $("#inputLabEdificio").val();
        Clave = $("#inputLabClave").val();

        var data = {numero: Number(Numero) ,edificio:Edificio ,status: 0,clave: Clave};
        fetch(`${API_URL}agregar`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => toastr.error('No se pudo agregar el Laboratorio.'))
          .then(response => toastr.success('Laboratorio agregado correctamente.'));
    
})
const loadIndex = () =>{
    fetch(`${API_URL}get`)
    .then(respone => respone.json())
    .then(data => fillTable(data))
    .catch(error => console.log(error))
}
const fillTable = (data) =>{
    let body = ''
    for(let i = 0; i < data.length; i++){
        let action = `<td><div class="input-group-prepend">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
    Action </button> <ul class="dropdown-menu"> <li onclick="Edit('${data[i].id}') class="dropdown-item"><a href="#">Edit</a></li>
    <li onclick="Delete('${data[i].id}') class="dropdown-item"><a">Delet </a></li></ul></div></td>`
        body += `<tr><td>Laboratorio ${data[i].numero}</td><td>Edificio ${data[i].edificio}, ${data[i].clave}</td>${action}</tr>`
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
const Edit = (id) =>{
    sessionStorage.DataId = id
    window.location.href = `${window.location.host}/laboratories/addLaboratories`
}