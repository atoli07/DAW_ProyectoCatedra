

var nombreValido = false;//variable para saber si el nombre se ingresó correctamente
var userValido = false; //variable para saber si se ingresó el usuario
var passValido = false;//variable para saber si se ingresó la contraseña


function init(){

    //capturando los controles por medio de su id
    var txtNombre = document.getElementById('nombre');
    var alerta = document.getElementById('alertNombre');
    var btnEnviar = document.getElementById('btnRegistar');

    //creando el evento click para el boton de enviar los  datos
    if(btnEnviar.addEventListener){
        btnEnviar.addEventListener("click", function(){
            //llamando a la funcion para validar el usuario
            validaruser();
            //llamando a la funcion para validar la contraseña
            validarPass();
            //llamando a la funcion para guardar los datos
            guardarDatos();
        }, false);
    }
    else if(btnEnviar.attachEvent){
        btnEnviar.attachEvent("onclick", function(){
            //llamando a la funcion para validar el usuario
            validaruser();
            //llamando a la funcion para validar la contraseña
            validarPass();
            //llamando a la funcion para guardar los datos
            guardarDatos();
        });
    }

    //creando el evento keyup cuando se digita el nombre y este se este validando
    if(txtNombre.addEventListener){
        txtNombre.addEventListener('keyup', validarNombre, false);
    }else if(txtNombre.attachEvent){
        txtNombre.attachEvent('keyup', validarNombre);
    }

    //creando el evento blur cuando se pierde el foco del control en el que se ingresa el nombre
    if(txtNombre.addEventListener){
        txtNombre.addEventListener('blur', function(){
            //aplicando estilos cuando se pierde el foco del control
            document.form.nombre.style.border = "1px solid silver";
            alerta.style.display = "none";
        }, false);
    }else if(txtNombre.attachEvent){
        txtNombre.attachEvent('blur', function(){
            //aplicando estilos cuando se pierde el foco del control
            document.form.nombre.style.border = "1px solid silver";
            alerta.style.display = "none";
        });
    }

    //verificando si el navegador soporta el almacenamiento local
    if(typeof(Storage) == "undefined") {
        alert('Su navegador no soporta el almacenamiento local');
    }

    if(typeof(localStorage) == "undefined") {
        alert('Su navegador no soporta el almacenamiento local');
    }

}



//funcion para validar que el nombre se ingrese correctamente
function validarNombre(){

    //capturando el valor del nombre
    var txtNombre = document.getElementById('nombre').value;
    //expresion regular para que solo se ingresen letras y las que se encuentran tiltadas
    var expresionNom = new RegExp("^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$", "i");

    //capturando por medio del id al span que muestra que el nombre es erroneo
    var alerta = document.getElementById('alertNombre');

    //validando si el dato ingresado coincide con la expresion regular
    if(expresionNom.test(txtNombre)){
        //actualizando la variable para indicar que se se ingresó correctamente
        nombreValido = true;
    }else{
        nombreValido = false;
    }

    //aplicando estilos al control si se ingresó bien o mal el nombre
    if(nombreValido == true){
        document.form.nombre.style.border = "5px solid green";
        alerta.style.display = "none";
    }else if(nombreValido == false){
        document.form.nombre.style.border = "5px solid red";
        alerta.style.display = "block";
    }
}


//funcion para validad que se ingrese el usuario
function validaruser(){
    
    //capturando el valor del usuario
    var txtuser = document.getElementById('user').value;
    
    //validando si el usuario no ingreso ningun valor
    if(txtuser  == null || txtuser == "" || txtuser.length == 0){
        userValido = false;
    }else{
        userValido = true;
    }
    
}

//funcion para validad que se ingrese la contraseña
function validarPass(){
    
    //capturando el valor de la contraseña
    var txtpass = document.getElementById('password').value;
    
    //validando si el usuario no ingreso ningun valor
    if(txtpass  == null || txtpass == "" || txtpass.length == 0){
        passValido = false;
    }else{
        passValido = true;
    }
    
}


//funcion utilizada para guardar los datos del formulario
function guardarDatos(){

    //capturando a los controles por medio de su id
    var nombre = document.getElementById('nombre');
    var usuario = document.getElementById('user');
    var password = document.getElementById('password');


    //validando si se ingresaron todos los datos
    if(nombreValido == true && userValido == true && passValido == true){
       
        //almacenando los datos en localStorage
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("usuario", usuario.value);
        localStorage.setItem("pass", password.value);

        //redireccionando al login
        window.location.href = "../login/login.html";
        
    }else{
        alert('Complete correctamente todos los campos.');
    }
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}