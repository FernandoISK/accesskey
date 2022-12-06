const authentication = () =>{
    var session = sessionStorage.SessionId;
    if(session == null)
        window.location.href = `${window.location.protocol}//${window.location.host}/authentication/login`
    
}
window.addEventListener("load", authentication())

