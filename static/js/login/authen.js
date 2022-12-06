const API_URL = "http://apiaccesskey.somee.com/api/Login/"
$("#save").on("click", function (e) {
    usernema = $('#Username').val();
    password = $('#Password').val();

    fetch(`${API_URL}Login?usuario=${usernema}&&pass=${password}`)
    .then(respone => respone.json())
    .then(data => validarDatos(data))
    .catch(error => console.log(error))
})
const validarDatos = (data) => {

    if(data.id > 0){
        sessionStorage.SessionId = data.id;
        sessionStorage.SessionUsuario = data.usuario;
        window.location.href = `${window.location.protocol}//${window.location.host}`
    }
}
