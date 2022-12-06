
//const xhr = new XMLHttpRequest();

//function onRequestHandler() {
//    if (this.readyState == 4 && this.status == 200)
//        console.log();
//}
//xhr.addEventListener("load", onRequestHandler);
//xhr.open("GET", `${API_URL}/Check/get`);
//xhr.send();
window.addEventListener("load",apiGet("Login/Login?usuario=mching&&pass=123"))
const API_URL = "http://www.apiaccesskey.somee.com/api/Login/";

function apiGet(URL_GET) {
    console.log(URL_GET)
    fetch(URL_GET)
        .then(response => response.json())
        .then(data => checkCredentials(data));    
}


