//Definir el arreglo con el nombre de los paises
var Paises = new Array('Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda',
    'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaiyán', 'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Belarús', 'Belice', 'Benin',
    'Bhután', 'Brasil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bélgica',
    'Camboya', 'Camerún', 'Canadá', 'Chequia', 'Chile', 'China', 'Colombia', 'Congo', 'Costa Rica',
    'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos',
    'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos de América', 'Federación de Rusia', 'Filipinas',
    'Finlandia', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Grecia', 'Guatemala', 'Haití', 'Honduras', 'Hungría',
    'India', 'Indonesia', 'Irán', 'Islandia', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Kenya', 'Kuwait',
    'Letonia', 'Libia', 'Líbano', 'Madagascar', 'Malasia', 'Malta', 'Marruecos', 'Mongolia', 'México', 'Mónaco',
    'Nepal', 'Nicaragua', 'Nigeria', 'Noruega', 'Nueva Zelandia', 'Pakistán', 'Panamá', 'Paraguay', 'Países Bajos', 'Perú',
    'Portugal', 'Qatar', 'República Dominicana', 'Rumania', 'Senegal', 'Singapur', 'Suecia', 'Suiza', 'Trinidad y Tabago',
    'Turquía', 'Ucrania', 'Uruguay', 'Venezuela', 'Viet Nam', 'Zambia', 'Zimbabwe'
);


var nombreValido = false;//variable para saber si el nombre se ingresó correctamente
var correoValido = false;//variable para saber si el correo se ingresó correctamente
var mensajeValido = false;//variable para saber si el mensaje se ingresó correctamente

var indice;//variable para guardar el indice en que se debene guardar los datos actualizados
var codigoConsulta;//variable para guardar el codigo de la consulta a registrar
var arrayConsultas = [];//array para guardar los datos de la consulta


//funcion que se ejecuta al cargar la pagina
function iniciar(){

    //capturando los controles por medio de su id
    var btnEnviar = document.getElementById('enviar');
    var txtNombre = document.getElementById('nombre');
    var alerta = document.getElementById('alertNombre');
    var txtcorreo = document.getElementById('correo');
    var soporte = document.getElementById('soporte');
    var arrayConsult = [];//array para guardar los datos de la consulta
    cargarPaises();//llamando a la funcion que carga los paises en control select

    //capturando los datos ingresados en localStorage
    arrayConsult = JSON.parse(localStorage.getItem("Consultas"));

    //validando si aun no se han ingresado datos
    if(arrayConsult != null){
        //llamando a la funcion para mostrar las consultas registradas
        mostrarConsultas();
        //llamando al metodo que elimina la consulta 
        eliminarConsulta();
        //llamando al metodo que actualiza la consulta 
        actualizarConsulta();
    }

    //creando el evento click para el boton de enviar los  datos
    if(btnEnviar.addEventListener){
        btnEnviar.addEventListener("click", validarDatos, false);
    }
    else if(btnEnviar.attachEvent){
        btnEnviar.attachEvent("onclick", validarDatos);
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
            document.frmcontacto.nombre.style.border = "1px solid silver";
            alerta.style.display = "none";
        }, false);
    }else if(txtNombre.attachEvent){
        txtNombre.attachEvent('blur', function(){
            //aplicando estilos cuando se pierde el foco del control
            document.frmcontacto.nombre.style.border = "1px solid silver";
            alerta.style.display = "none";
        });
    }


    //creando el evento keyup cuando se digita el correo y este se este validando
    if(txtcorreo.addEventListener){
        txtcorreo.addEventListener('keyup', validarCorreo, false);
    }else if(txtcorreo.attachEvent){
        txtcorreo.attachEvent('keyup', validarCorreo);
    }


    //creando el evento blur cuando se pierde el foco del control en el que se ingresa el correo
    if(txtcorreo.addEventListener){
        txtcorreo.addEventListener('blur', function(){
            //aplicando estilos cuando se pierde el foco del control
            document.frmcontacto.correo.style.border = "1px solid silver";
            alerta.style.display = "none";
        }, false);
    }else if(txtcorreo.attachEvent){
        txtcorreo.attachEvent('blur', function(){
            //aplicando estilos cuando se pierde el foco del control
            document.frmcontacto.correo.style.border = "1px solid silver";
            alerta.style.display = "none";
        });
    }


    //verificando si el navegador soporta el almacenamiento local
    if(typeof(Storage) == "undefined") {
        soporte.style.display = "block";
    }
    else {
       soporte.style.display = "none";
    }

    if(typeof(localStorage) == "undefined") {
        soporte.style.display = "block";
    }
    else {
        soporte.style.display = 'none';
    }

    //colocando el valor de false a la key que se valida si se debe actualizar el dato
    localStorage.setItem("actualizarD", "false");

}


// funcion para cargar el comboBox con todos los paises 
function cargarPaises() {
    
    //agregando los paises
    for(x=0;x<Paises.length;x++)
    document.frmcontacto.Pais[x] = new Option(Paises[x]);
}



//funcion para validad que el nombre se ingrese correctamente
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
        document.frmcontacto.nombre.style.border = "5px solid green";
        alerta.style.display = "none";
    }else if(nombreValido == false){
        document.frmcontacto.nombre.style.border = "5px solid red";
        alerta.style.display = "block";
    }
}



//funcion para validar que se ingrese correctamente el correo
function validarCorreo(){

    //capturando el valor del correo
    var txtcorreo = document.getElementById('correo').value;
    //capturando por medio del id al span que muestra que el correo es erroneo
    var alerta = document.getElementById('alertMail');
    //expresiones regulares para validar el formato del correo
    var expresionMail1 = /^[\w.+]{1,}@([A-Z0-9]{1,}\.)(com|net|edu|org|gov)$/i;
    var expresionMail2 = /[\w.+]{1,}@([A-Z0-9]{1,}\.)([A-Z0-9]{1,}\.)(com|net|edu|org|gov)(\.[A-Z0-9]{1,})$/i;

    //comprovando si el correo ingresado coincide con alguna expresion regular
    if(expresionMail1.test(txtcorreo) || expresionMail2.test(txtcorreo)){
        //actualizando la variable para indicar que se se ingresó correctamente
        correoValido = true;
    }else{
        correoValido = false;
    }

    //aplicando estilos al control si se ingresó bien o mal el correo
    if(correoValido == true){
        document.frmcontacto.correo.style.border = "5px solid green";
        alerta.style.display = "none";
    }else if(correoValido == false){
        document.frmcontacto.correo.style.border = "5px solid red";
        alerta.style.display = "block";
    }

}


//funcion para validad que se ingrese el mensaje
function validarMensaje(){
    
    //capturando el valor del mensaje
    var textarea = document.frmcontacto.comentarios.value;
    
    //validando si el usuario no ingreso ningun valor
    if(textarea == null || textarea == "" || textarea.length == 0){
        mensajeValido = false;
    }else{
        mensajeValido = true;
    }
    
}


//funcion para validar los datos en genral
function validarDatos(){    

    //capturando por medio del id al span que muestra que debe llanar todos los campos
    var alerta = document.getElementById('alertMsg');

    //llamando a la funcion para validar el mensaje
    validarMensaje();


    //comprobando si todos los datos son correctos
    if(nombreValido == true && correoValido == true && mensajeValido == true){
        //llamando a la funcion que permite guardar los datos
        guardarDatos(); 
    }else{
        alerta.style.display = "block";
    }

}


//funcion utilizada para guardar los datos del formulario
function guardarDatos(){

    //capturando a los controles por medio de su id
    var nombre = document.getElementById('nombre');
    var lstpais = document.getElementById('Pais');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('comentarios');
    var pais = lstpais.options[lstpais.selectedIndex].text;
    var clave;//variable para guardar el ultimo codigo de consulta que se registró
 
    //capturando el dato de la key para saber si se debe registra una consulta o actualizar
    var actualizarD = localStorage.getItem("actualizarD");
    //capturando los datos de las consultas registradas
    var arrayConsult = JSON.parse(localStorage.getItem("Consultas"));


    //validando si el proceso a realizar es actualizacion o registro
    if(actualizarD == 'true'){
        
        //capturando los datos de la consulta a modificar 
        var consultaObject = arrayConsult[indice];

        //tomando el codigo de la consulta a modificar
        var cod = consultaObject.codigo;
       
        //creando el objeto que guarda los datos de la consulta
        var consultarObject = new Object();
        //guardando los datos en los atributos del objeto
        consultarObject.codigo = parseInt(cod);
        consultarObject.nombre = nombre.value;
        consultarObject.pais = pais;
        consultarObject.correo = correo.value;
        consultarObject.mensaje = mensaje.value;

        //guardando los nuevos datos en la posicion de la consulta a modificar
        arrayConsult[indice] = consultarObject;

        //guardando en localStorage el array de las consultas con los nuevos datos 
        localStorage.setItem("Consultas", JSON.stringify(arrayConsult));
        //actualizando a false el valor de la key que valida si se hara un registro o actualizacion
        localStorage.setItem("actualizarD", "false");

    }else{

        //proceso para realizar el registro de una consulta

        //validando si aun no se han registrado datos
        if(arrayConsult != null && arrayConsult.length != 0){

            //si se registró anteriormente se recorren todo los registros para tomar el ultimo codigo de consulta registrado
            for(var i=0; i<arrayConsult.length; i++){

                //tomando los datos del arrego y pasandolo a un objeto
                var consultaObject = arrayConsult[i];

                //capturando el codigo del registro
                clave = consultaObject.codigo;
                            
            }

            //convirtiendo a entero el ultimo codigo de consulta registrado
            codigoConsulta = parseInt(clave);
            //sumando en 1 al codigo de consulta para generar el nuevo codigo a registrar
            codigoConsulta = codigoConsulta + 1;
            //tomando los datos guardados
            arrayConsultas = JSON.parse(localStorage.getItem("Consultas"));
            
        }else{
            //si no hay registros hechos anteriormente se asigna el codigo 1000 a ser registrado
            codigoConsulta = 1000;
        } 
        
        
        //creando el objeto de las consultas
        var consultaObject = new Object();
        //asignando los datos de la consulta a registrar en los atributos del objeto
        consultaObject.codigo = parseInt(codigoConsulta);
        consultaObject.nombre = nombre.value;
        consultaObject.pais = pais;
        consultaObject.correo = correo.value;
        consultaObject.mensaje = mensaje.value;
        //guardando el objeto en el array
        arrayConsultas.push(consultaObject);
        //almacenando el array en localStorage
        localStorage.setItem("Consultas", JSON.stringify(arrayConsultas));
    }


    //llamando a la funcion que muestra las consultas registradas
    mostrarConsultas();
}


//funcion que muestra las consultas registradas en localStorage
function mostrarConsultas(){

    //variable para guardar la estructura de la fila de la tabla
    fila ="";

    //tomando los datos almacenados
    var arrayConsult = JSON.parse(localStorage.getItem("Consultas"));

    //recorriendo todos los registros para mostrarlos
    for(var i=0; i<arrayConsult.length; i++){

        var consultaObject = arrayConsult[i];

        fila+="<tr>"
        fila+="<td>" + consultaObject.codigo + "</td>";
        fila+="<td>" + consultaObject.nombre + "</td>";
        fila+="<td>" + consultaObject.pais + "</td>";
        fila+="<td>" + consultaObject.correo + "</td>";
        fila+="<td>" + consultaObject.mensaje + "</td>"; 
        fila+="<td>" + "<button class='btnA boton-Actualizar' id='" + consultaObject.codigo + "' type='button'> Actualizar </button>" + "</td>"; 
        fila+="<td>" + "<button class='btn boton-Eliminar' id='" + consultaObject.codigo + "' type='submit'> Eliminar </button>" + "</td>"; 
        fila+="</tr>"
    }

    //capturando al elemento en el que se mostraran las consultas
    document.getElementById('datosConsultas').innerHTML=fila;

}


//funcion que permite eliminar una consulta registrada
function eliminarConsulta(){

    var idbtn;//variable que guarda el id del boton al que se le genero el evento click
    var clave;//variable la cual guarda el id de la consulta a eliminar

    //tomando los datos registrados
    arrayConsultas = JSON.parse(localStorage.getItem("Consultas"));

    //seleccionado a todos los botones que contengan la clase btn
    var btns =document.querySelectorAll('.btn');

    //recorriendo todos los botones con la misma clase
    for(var i=0;i<btns.length;i++)
    {
        //generando el evento click del boton presionado
        btns[i].addEventListener("click", function()
        {
            //capturando el id del boton presionado
            idbtn = this.id;

            //recorriendo los datos de todas las consultas registradas
            for(var j=0; j<arrayConsultas.length; j++){

                //guardando en un objeto los datos de cada consulta
                var consultaObject = arrayConsultas[j];

                //tomando el codigo de la consulta
                clave = consultaObject.codigo;                

                //si el codigo de la consulta coincide con el del boton se pregunta si esta seguro de eliminar el registro
                if(clave == idbtn){
                    
                    //mensaje de confirmacion para saber si eliminar o no el registro
                    var comprobarEliminacion  = confirm("¿Seguro que desea eliminar la consulta?");

                    //si el usuario acepto la eliminacion se realiza el proceso
                    if (comprobarEliminacion == true) {
                
                        //eliminando el registro correspondiente de array
                        arrayConsultas.splice(j, 1); 
                        //guardando en localstorage el array con el registro eliminado
                        localStorage.setItem("Consultas", JSON.stringify(arrayConsultas));
                        location.reload();//recargando la pagina
                    } 
                }                                  
                            
            }            

        }); 
    }

}


//funcion que permite actualizar los datos de una consulta registrada
function actualizarConsulta(){

    var idbtn;//variable que guarda el id del boton al que se le genero el evento click
    var clave;//variable la cual guarda el id de la consulta a eliminar

    //capturando los controles del formulario por medio de su id
    var nombreC = document.getElementById('nombre');
    var lstpaisC = document.getElementById('Pais');
    var correoC = document.getElementById('correo');
    var mensajeC = document.getElementById('comentarios');

    //tomando los datos guardados localStorage 
    arrayConsultas = JSON.parse(localStorage.getItem("Consultas"));

    //seleccionado a todos los botones que contengan la clase btnA
    var btns =document.querySelectorAll('.btnA');

    //recorriendo todos los botones con la misma clase
    for(var i=0;i<btns.length;i++)
    {
        //generando el evento click del boton presionado
        btns[i].addEventListener("click", function()
        {
            //tomando el id del boton presionado
            idbtn = this.id;

            //recorriendo los datos del array en el que se guardaron los datos del localstorage
            for(var j=0; j<arrayConsultas.length; j++){

                //asignando lo datos de cada consulta en un objeto
                var consultaObject = arrayConsultas[j];

                //tomando el codigo del registro
                clave = consultaObject.codigo;                

                //si el codigo coincide con el id del boton presionado se realiza la actualizacion
                if(clave == idbtn){
                    
                    //actulualizando el valor a true de la key que valida si se realizara una actualizacion
                    localStorage.setItem("actualizarD", "true");
                    //guardando el indice del array en el cual se deben actualizar los datos
                    indice = j;
                    
                    //mostrando los datos de la consulta en los controles del formulario
                    nombreC.value = consultaObject.nombre;
                    lstpaisC.value = consultaObject.pais;
                    correoC.value = consultaObject.correo;
                    mensajeC.value = consultaObject.mensaje;

                    //actulizando las varibles que validan los datos correctos de los controles
                    nombreValido = true;
                    correoValido = true;
                    mensajeValido = true;
                
                }                                  
                            
            }            

        }); 
    }

}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}