//funcion que se ejecuta al cargar la pagina para generar el evento click del boton registrar
function init() {

    btnlogin = document.getElementById('btnlogin');

    //creando el evento click para el boton de registrar
    if(btnlogin.addEventListener){
        btnlogin.addEventListener("click", login, false);
    }
    else if(btnRegistrar.attachEvent){
        btnlogin.attachEvent("onclick", login);
    }
}

function login(){

    var user = document.getElementById('username');
    var contraseña = document.getElementById('password');
    var datoValido = false;

    //Obteniendo los datos del localstorage
    var item = JSON.parse(localStorage.getItem("usuario"));
    var item2 = JSON.parse(localStorage.getItem("contraseña"));

    //Comparando los datos del input con los del localstorage
    if((user = item) && (contraseña = item2)){
        datoValido = true;
    }
  

    /*No funciona el redireccionamiento
    if(datoValido == true){
        //redireccionar a otra pagina
        window.location.href ='https://google.com';
    }*/
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}