/*Objeto JSON para guardar los datos de los desarrolladores */

var Desarrolladores = {
    "datos": [
        {"imagen" : "img/user1.png",
        "nombre" : "Victor Samuel Panameño Santos ",
        "carnet" : "PS211109",
        "edad" : 19,
        "carrera" : "Técnico en Ingeniería en Computación"},

        {"imagen" : "img/user2.png",
        "nombre" : "Hazel Marbeli Hernández Ramírez",
        "carnet" : "HR210509",
        "edad" : 19,
        "carrera" : "Técnico en Ingeniería en Computación"},

        {"imagen" : "img/user2.png",
        "nombre" : "Jocelyn Guadalupe Baires Rivera",
        "carnet" : "BR200378",
        "edad" : 19,
        "carrera" : "Técnico en Ingeniería en Computación"},

        {"imagen" : "img/user1.png",
        "nombre" : "Wilber Francisco Chacón Erroa",
        "carnet" : "CE211044",
        "edad" : 19,
        "carrera" : "Técnico en Ingeniería en Computación"},

        {"imagen" : "img/user2.png",
        "nombre" : "Alexia María Ayala Alférez",
        "carnet" : "AA180552",
        "edad" : 20,
        "carrera" : "Técnico en Ingeniería en Computación"}
    ]
};



//capturando al contenedor en el que se mostraran los datos
var seccion = document.getElementById("equipo");
//insertando los datos en el contenedor
seccion.innerHTML = mostrar(Desarrolladores.datos);


//funcion para recorrer los datos del objeto JSON
function mostrar(dat){
    
    //variable para guardar la cantidad de datos
    var cant = dat.length;
    //guardando la estructura de los datos a mostrar
    var content="<h2>Grupo de trabajo</h2>";    

    //recorriendo los datos del objeto JSON para mostrarlos
    for(var i=0; i<cant; i++){

        content += "<p>";
        content += "<img src='" + dat[i].imagen + "'/><br/><br/>";
        content += "<b>Nombre:</b> "+dat[i].nombre+".<br/><br/>";
        content += "<b>Carné:</b> "+dat[i].carnet+".<br/><br/>";
        content += "<b>Edad:</b> "+dat[i].edad+".<br/><br/>";
        content += "<b>Carrera:</b> "+dat[i].carrera+".<br/><br/>";        
        content += "</p>";
    }
    
    //retornando el contenido a mostrar en el contenedor
    return content;
}