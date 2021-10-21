// matriz que contiene los datos de los departamentos
var listaDatos = [["SLV1343", "Ahuchapan", "Ahuachapán", "756.19 km cuadrados.", "del 5 al 14 de febrero", "para el año 2017 eran 129,750"],
    ["SLV1344", "Cabañas", "Sensuntepeque", "1,103.51 km cuadrados", "En honor a San Miguel Arcángel (20-29 de septiembre)", "167,761"],
    ["SLV1345", "Cuscatlán", "Cojutepeque", "756.19 km cuadrados", "oficialmente los días 26, 27 y 28 de diciembre", "para el año 2018 eran 232,238"],
    ["SLV1346", "La Libertad", "Santa Tecla.", "1,652.88 km cuadrados", "del 1 al 8 de diciembre", "para el año 2018 eran 843 500"],
    ["SLV1347", "La Paz", "Zacatecoluca", "1,223.61 km cuadrados", "del 16 al 26 de febrero.", "362,649"],
    ["SLV1348", "Sonsonate", "Sonsonate", "1,225.77 km cuadrados", "del 25 de enero al 2 de febrero", "para el año 2013 eran 438 960."],
    ["SLV1349", "San Salvador", "San Salvador", "886.15 km cuadrados", "del 1 al 6 de agosto", "para el año 2019 eran 2,750,600"],
    ["SLV1350", "La Unión", "Ciudad de La Unión", "2,074 km cuadrados", "del 1 al 15 de octubre.", "268,557"],
    ["SLV1351", "Morazán", "San Francisco Gotera", "1,447.43 km cuadrados", "del 1 al 4 de octubre", "203,677"],
    ["SLV1352", "San Miguel", "Ciudad de San Miguel", "2,077.10 km cuadrados", "Último fin de semana de noviembre", "500,062"],
    ["SLV1353", "San Vicente", "Ciudad de San Vicente", "1,184.02 km cuadrados", "del 10 al 31 de diciembre", "184,093"],
    ["SLV1354", "Usulután", "Ciudad de Usulután", "2,130.44 km cuadrados", "del 16 al 29 de noviembre", "374,629"],
    ["SLV1357", "Chalatenango", "Chalatenango", "2,016.58 km cuadrados", "del 15 al 24 de junio.", "para el año 2017 eran 275.000"],
    ["SLV1358", "Santa Ana", "Santa Ana", "2,023.17 km cuadrados", "del 17 al 26 de julio", "para el año 2013 eran 264 091."]
];

var arraydepar = [];//array para guardar los datos de localstorage


function init(){

    
    //verificando si el navegador soporta el almacenamiento local
    if(typeof(Storage) == "undefined") {
        alert('Su navegador no soporta el almacenamiento local');
    }
    
    if(typeof(localStorage) == "undefined") {
        alert('Su navegador no soporta el almacenamiento local');
    }
    
    //tomando los datos de la key Depart en localStorage
    var matizConsult = JSON.parse(localStorage.getItem("Depart"));

    //si no hay registros en localStorage se guardan los de la matriz
    if(matizConsult == null){

        //recorriendo la matriz
        for(var b=0; b<14; b++)
        { 
            //creando el objeto que guardara los datos de cada departamento
            var DepartementosObject = new Object();
            //guardando los datos en los atributos del objeto
            DepartementosObject.codigo = listaDatos[b][0];
            DepartementosObject.nombre = listaDatos[b][1];
            DepartementosObject.Cabezara = listaDatos[b][2];
            DepartementosObject.Extension = listaDatos[b][3];
            DepartementosObject.Fiestas = listaDatos[b][4];
            DepartementosObject.Habitantes = listaDatos[b][5];

            //guardando los datos del objeto en el array
            arraydepar.push(DepartementosObject);
        }

        //guardando los datos del array en localStorage 
        localStorage.setItem("Depart", JSON.stringify(arraydepar));

    }else if(matizConsult != null){

        //si hay registros en localstorage se muestran
        var idElement;//variable para guardar el id del ementoque al que se le hizó mouseover
        var codigo; //variable para guaradar el codigo del registro

        //capturando los datos de los departamentos desde localStorage 
        var arraydatos = JSON.parse(localStorage.getItem("Depart"));

        //capturando a todos los elementos que contengan la clase depa
        var elementos =document.querySelectorAll('.depa');

        //recorriendo todos los elementos de la misma clase
        for(var i=0;i<elementos.length;i++)
        { 
            //generando el evento mouseover a todos los elementos
            elementos[i].addEventListener('mouseover', function(e)
            {                
                //capturando el id del elemento al que se le posicionó el mouse
                idElement = this.id;
                 

                //recorriendo los datos de todas los registros de los departamentos
                for(var j=0; j<arraydatos.length; j++){

                    //guardando en un objeto los datos de cada departamento
                    var DatosObject = arraydatos[j];

                    //tomando el codigo del registro
                    codigo = DatosObject.codigo; 
                    
                     
                    /*si el codigo del registro coincide con el del elemento al que se le hizó mouseover 
                    se muestran los datos del departamento*/
                    if(codigo == idElement){

                        //capturando por medio de su id al contenedor que mostrará los datos
                        var depto = document.getElementById('popup'); 

                        //creando la estructura de los datos a mostrar
                        var info = "";                        

                        info += "<p>";
                        info += "<b>Nombre: </b>" + DatosObject.nombre + "<br/>";
                        info += "<b>Cabezara departamental: </b>" + DatosObject.Cabezara + "<br/>";
                        info += "<b>Extensión territorial: </b>" + DatosObject.Extension + "<br/>";
                        info += "<b>Fiestas: </b>" + DatosObject.Fiestas + "<br/>";
                        info += "<b>Habitantes: </b>" + DatosObject.Habitantes + "<br/>";
                        info += "</p>";      
                        
                        //insertando los datos en el contenedor
                        depto.innerHTML = info;

                        //llamando a la funcion que toma las coordenadas del mouse
                        var cursor = tomarCoordenadas(e);

                        //mostrando y posicionando al contenedor con los datos
                        depto.style.display = 'block'
                        depto.style.left = cursor.x +'px'; 
                        depto.style.top = cursor.y +'px';

                    }       
                    
                                
                }            

            }); 
        }



    }

}


//funcion para capturar las coordenadas del mouse
var tomarCoordenadas = function(e) {

    //asignando el evento
    e = e || window.event;

    //capturando las coordenadas
    var x = e.pageX || (e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
    var y= e.pageY || (e.clientY + (document.documentElement.scrollTop || document.body.scrollTop));

    //retornando el valor de las coordenadas
    return {'x':x,'y':y};
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}