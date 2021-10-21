
var indice;//variable para guardar el indice en que se deben guardar los datos actualizados
var arrayDatos = [];//array para guardar los datos de los registros

function init(){
    //capturando los controles por medio de su id
    var btnEnviar = document.getElementById('enviar');

    //creando el evento click para el boton de enviar los  datos
    if(btnEnviar.addEventListener){
        btnEnviar.addEventListener("click", guardarGegistro, false);
    }
    else if(btnEnviar.attachEvent){
        btnEnviar.attachEvent("onclick", guardarGegistro);
    }

    //verificando si el navegador soporta el almacenamiento local
    if(typeof(Storage) == "undefined") {
        alert('Su navegador no soporta el almacenamiento local');
    }
    
    if(typeof(localStorage) == "undefined") {
       alert('Su navegador no soporta el almacenamiento local');
    }

    mostrarRegistros();
    localStorage.setItem("actualizarRe", "false");
    actualizarRegistro();
   
}


//funcion que muestra los registros de los departamentos en localStorage
function mostrarRegistros(){

    //variable para guardar la estructura de la fila de la tabla
    fila ="";

    //tomando los datos almacenados
    var arrayDatos = JSON.parse(localStorage.getItem("Depart"));

    //recorriendo todos los registros para mostrarlos
    for(var i=0; i<arrayDatos.length; i++){

        var datosObject = arrayDatos[i];

        fila+="<tr>"
        fila+="<td>" + datosObject.codigo + "</td>";
        fila+="<td>" + datosObject.nombre + "</td>";
        fila+="<td>" + datosObject.Cabezara + "</td>";
        fila+="<td>" + datosObject.Extension + "</td>";
        fila+="<td>" + datosObject.Fiestas + "</td>"; 
        fila+="<td>" + datosObject.Habitantes + "</td>"; 
        fila+="<td>" + "<button class='btnA boton-Actualizar' id='" + datosObject.codigo + "' type='button'> Actualizar </button>" + "</td>"; 
        fila+="</tr>"
    }

    //capturando al elemento en el que se mostraran los registros
    document.getElementById('datosDeptos').innerHTML=fila;

}


//funcion que permite actualizar los datos de un departemento registrado
function actualizarRegistro(){

    var idbtn;//variable que guarda el id del boton al que se le genero el evento click
    var clave;//variable la cual guarda el id del registro a actualizar

    //capturando los controles del formulario por medio de su id
    var nombre = document.getElementById('nombre');
    var Cabezara = document.getElementById('Cabezara');
    var Extension = document.getElementById('Extension');
    var Fiestas = document.getElementById('Fiestas');
    var Habitantes = document.getElementById('Habitantes');

    //tomando los datos guardados localStorage 
    arrayDatos = JSON.parse(localStorage.getItem("Depart"));

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
            for(var j=0; j<arrayDatos.length; j++){

                //asignando lo datos del departamento en un objeto
                var DatosObject = arrayDatos[j];

                //tomando el codigo del registro
                clave = DatosObject.codigo;                

                //si el codigo coincide con el id del boton presionado se realiza la actualizacion
                if(clave == idbtn){
                    
                    //actualizando el valor a true de la key que valida si se realizara una actualizacion
                    localStorage.setItem("actualizarRe", "true");
                    //guardando el indice del array en el cual se deben actualizar los datos
                    indice = j;
                    
                    //mostrando los datos del departamento en los controles del formulario
                    nombre.value = DatosObject.nombre;
                    Cabezara.value = DatosObject.Cabezara;
                    Extension.value = DatosObject.Extension;
                    Fiestas.value = DatosObject.Fiestas;
                    Habitantes.value = DatosObject.Habitantes;

                                    
                }                                  
                            
            }            

        }); 
    }

}





//funcion utilizada para guardar los datos del formulario
function guardarGegistro(){

    //capturando los controles del formulario por medio de su id
    var nombre = document.getElementById('nombre');
    var Cabezara = document.getElementById('Cabezara');
    var Extension = document.getElementById('Extension');
    var Fiestas = document.getElementById('Fiestas');
    var Habitantes = document.getElementById('Habitantes');
 
    //capturando el dato de la key para saber si se debe registra datos o actualizar
    var actualizarRe = localStorage.getItem("actualizarRe");

    //capturando los datos de los departamentos registradas
    arrayDatos = JSON.parse(localStorage.getItem("Depart"));


    //validando si el proceso a realizar es actualizacion o registro
    if(actualizarRe == 'true'){
        
        //capturando los datos del departamento a modificar 
        var DatosObject = arrayDatos[indice];

        //tomando el codigo del registro a modificar
        var cod = DatosObject.codigo;
       
        //creando el objeto que guarda los datos del departamento
        var ObjectData = new Object();
        //guardando los datos en los atributos del objeto
        ObjectData.codigo = cod;
        ObjectData.nombre = nombre.value;
        ObjectData.Cabezara = Cabezara.value;
        ObjectData.Extension = Extension.value;
        ObjectData.Fiestas = Fiestas.value;
        ObjectData.Habitantes = Habitantes.value;

        //guardando los nuevos datos en la posicion del registro a modificar
        arrayDatos[indice] = ObjectData;

        //guardando en localStorage el array de los registros con los nuevos datos 
        localStorage.setItem("Depart", JSON.stringify(arrayDatos));
        //actualizando a false el valor de la key que valida si se hara un registro o actualizacion
        localStorage.setItem("actualizarRe", "false");

    }else{
        alert('ERROR. En este formulario solo puede realizar actualizaciones');
    }
    //llamando a la funcion que muestra los departamentos registrados
    mostrarRegistros();
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}