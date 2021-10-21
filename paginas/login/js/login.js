

function init(){

    //capturando los controles por medio de su id
    var user = document.getElementById('user');
    var pass = document.getElementById('password');
    var btnRegistrarse = document.getElementById('btnRegistrarse');
    var btnIngresar = document.getElementById('btnIngresar');

    //asignando el valor false a la key que valida si se inició sesion o no
    localStorage.setItem("VSesion", "false");

    //caturando usuario y contraseña desde el localStorage
    var usuarioR = localStorage.getItem("usuario");  
    var password = localStorage.getItem("pass");  

    
    //creando el evento click para el boton para registrarse
    if(btnRegistrarse.addEventListener){
        btnRegistrarse.addEventListener("click", function(){
            //redireccionando a la ventana de registrarse
            window.location.href = "../Registrarse/Registrarse.html";
        }, false);
    }
    else if(btnRegistrarse.attachEvent){
        btnRegistrarse.attachEvent("onclick", function(){
            //redireccionando a la ventana de registrarse
            window.location.href = "../Registrarse/Registrarse.html";
        });
    }


    //creando el evento click para el boton para ingresar
    if(btnIngresar.addEventListener){
        btnIngresar.addEventListener("click", function(){

            //validando si aun no se han ingresado datos
            if(usuarioR != null && password != null){

                //tomando los datos de los controles
                var usuario = user.value;
                var contra = pass.value;

                
                //si los datos coinciden se redirecciona a inicio
                if(usuarioR == usuario && password == contra){

                    //actualizando el valor true de la key que valida si se inició sesion
                    localStorage.setItem("VSesion", "true");
                    window.location.href = "../../index.html";
                }else{
                    var alerta = document.getElementById('alertdatos');
                    alerta.style.display = "block";
                }                                    
                                
                                
            }else{
                alert('Debe registrarse');
            }


        }, false);
    }
    else if(btnIngresar.attachEvent){
        btnIngresar.attachEvent("onclick", function(){
            
            //validando si aun no se han ingresado datos
            if(usuarioR != null && password != null){

                //tomando los datos de los controles
                var usuario = user.value;
                var contra = pass.value;

                
                //si los datos coinciden se redirecciona a inicio
                if(usuarioR == usuario && password == contra){

                    //actualizando el valor true de la key que valida si se inició sesion
                    localStorage.setItem("VSesion", "false");
                    window.location.href = "../../index.html";
                }else{
                    var alerta = document.getElementById('alertdatos');
                    alerta.style.display = "block";
                }                                  
                                
                                
            }else{
                alert('Debe registrarse');
            }
            
        });
    }

}



//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}

