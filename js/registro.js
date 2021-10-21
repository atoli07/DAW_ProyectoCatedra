//funcion que se ejecuta al cargar la pagina para generar el evento click del boton registrar
function init() {

    btnRegistrar = document.getElementById('btnRegistrar');

    //creando el evento click para el boton de registrar
    if(btnRegistrar.addEventListener){
        btnRegistrar.addEventListener("click", validarNombre, false);
    }
    else if(btnRegistrar.attachEvent){
        btnRegistrar.attachEvent("onclick", validarNombre);
    }

    //creando el evento click para el boton de registrar
    if(btnRegistrar.addEventListener){
        btnRegistrar.addEventListener("click", validarPassword, false);
    }
    else if(btnRegistrar.attachEvent){
        btnRegistrar.attachEvent("onclick", validarPassword);
    }
}

//Funcion que valida el nombre
function validarNombre(){

    var new_username = document.getElementById('nombre').value;

    //localstorage para nombre del usuario
    if(localStorage.getItem('usuario') == null){
        localStorage.setItem('usuario', '[]');
    }

    var user = JSON.parse(localStorage.getItem('usuario'));
    user.push(new_username);

    localStorage.setItem('usuario', JSON.stringify(user));

}

//Funcion que valida la contraseña
function validarPassword(){

    var datoValido = false;
    var new_psswd = document.getElementById('contraseña').value;
    var new_psswd2 = document.getElementById('contraseña2').value;
    
    //Constructor por si las contraseñas coinciden
    if(localStorage.getItem('contraseña2') == localStorage.getItem('contraseña')){

        //localstorage para la contraseña
        if(localStorage.getItem('contraseña') == null){
            localStorage.setItem('contraseña', '[]');
        }

        var psswd = JSON.parse(localStorage.getItem('contraseña'));
        psswd.push(new_psswd);

        localStorage.setItem('contraseña', JSON.stringify(psswd));

        //localstorage para la contraseña2
        if(localStorage.getItem('contraseña2') == null){
            localStorage.setItem('contraseña2', '[]');
        }

        var psswd2 = JSON.parse(localStorage.getItem('contraseña2'));
        psswd2.push(new_psswd2);

        localStorage.setItem('contraseña2', JSON.stringify(psswd2));
    }

    //Constructor por si las contraseñas son diferentes
    if (localStorage.getItem('contraseña') !== localStorage.getItem('contraseña2')){
        datoValido = true;
    }

    if(datoValido == true){
        alert('Las contraseñas no coinciden');
        //Metodo para que no guarde los datos en el localstorage
        localStorage.clear();
    }
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}