
//creando el objeto usuario
var Usuario = new Object();

//funcion que se ejecuta al cargar la pagina
function init(){

    var btncerrar = document.getElementById('btnCerrarS');

    //creando el evento click para el boton de cerra sesion
    if(btncerrar.addEventListener){
        btncerrar.addEventListener("click", function(){
            //llamando al metodo para cerrar sesion
            Usuario.cerrarSesion();
        }, false);
    }
    else if(btncerrar.attachEvent){
        btncerrar.attachEvent("onclick", function(){
            //llamando al metodo para cerrar sesion
            Usuario.cerrarSesion();
        });
    }


    //asignando los datos del usuario en los atributos del objeto
    Usuario.sesion = localStorage.getItem("VSesion");

    if(Usuario.sesion != null){
        //llamando a la funcion que validad si se inició sesion 
        Usuario.auntenticar();

    }else{
        //si no hay registros se envia al login
        window.location.href = "paginas/login/login.html";
    }

    //asignando el nombre del usuario en los atributos del objeto
    Usuario.nombre = localStorage.getItem("nombre");  

    //capturando al comtrol que muestra el nombre
    var name = document.getElementById('nomUs');

    //mostrando el nombre
    var dato = "Usuario: "+ Usuario.nombre;

    name.innerHTML = dato;
    
}




//metodo que valida si se inicio sesion 
Usuario.auntenticar = function(){    

    if(Usuario.sesion == 'false'){
        //redireccionar al login
        window.location.href = "paginas/login/login.html";
    }
}

//funcion para cerrar sesion
Usuario.cerrarSesion = function(){
    localStorage.setItem("VSesion", "false");
    window.location.href = "paginas/login/login.html";

}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}