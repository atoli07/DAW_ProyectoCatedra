
var abierto = false;//variable para saber si el menu se encuentra abierto o no

var click = false;//variable para saber si se dio click en una opcion


//funcion para generar los eventos click
function iniciar(){

    //capturando a traves del id al boton que muestra el menu
    var btnMenu = document.getElementById("btnmostrarMenu");
    //capturando a traves del id al submenu1
    var submenu1 = document.getElementById("submenu1");
    //capturando a traves del id al submenu2
    var submenu2 = document.getElementById("submenu2");
    //capturando a traves del id al submenu3
    var submenu3 = document.getElementById("submenu3");
    
    //Creando el evento clic para el boton que permite mostrar el menu
    if(btnMenu.addEventListener){
        btnMenu.addEventListener('click', colocarClase, false);
    }
    else if(btnMenu.attachEvent){
        btnMenu.attachEvent('onclick', colocarClase);
    }


    //Creando el evento clic para el submenu1
    if(submenu1.addEventListener){
        submenu1.addEventListener('click', mostrarsubmenu1, false);
    }
    else if(submenu1.attachEvent){
        submenu1.attachEvent('onclick', mostrarsubmenu1);
    }

    //Creando el evento clic para el submenu2
    if(submenu2.addEventListener){
        submenu2.addEventListener('click', mostrarsubmenu2, false);
    }
    else if(submenu2.attachEvent){
        submenu2.attachEvent('onclick', mostrarsubmenu2);
    }

    //Creando el evento clic para el submenu3
    if(submenu3.addEventListener){
        submenu3.addEventListener('click', mostrarsubmenu3, false);
    }
    else if(submenu3.attachEvent){
        submenu3.attachEvent('onclick', mostrarsubmenu3);
    }
}


//funcion para colocar las clases que muestran al menu
function colocarClase(){
    
    //capturando a traves del id al contenedor del menu
    var menu = document.getElementById("mostrarMenu");  
    //capturando a traves del id la barra 1 del icono del menu
    var barra1 = document.getElementById("barra1");  
    //capturando a traves del id la barra 2 del icono del menu
    var barra2 = document.getElementById("barra2");  
    //capturando a traves del id la barra 3 del icono del menu
    var barra3 = document.getElementById("barra3");  
        
    //validando si el menu ya esta abierto
    if(abierto == false){
        //colocando la clase al menu para aplicar reglas de estilo que permiten mostrarlo
        menu.classList.add('activado');  
        
        //colocando la clase para cambiar el estilo del icono
        barra1.classList.add('barra-1'); 
        barra2.classList.add('barra-2'); 
        barra3.classList.add('barra-3'); 

        //canbiando el valor de la variable que permite saber si el menu se esta mostrando o no
        abierto = true;        

    }else if(abierto == true){
        //removiendo la clase que contienen las reglas de estilo las cuales  muestra al menu,
        //de tal manera que se oculte 
        menu.classList.remove('activado');  

        //removiendo las clases para cambiar el estilo del icono
        barra1.classList.remove('barra-1'); 
        barra2.classList.remove('barra-2'); 
        barra3.classList.remove('barra-3'); 

        //canbiando el valor de la variable que permite saber si el menu se esta mostrando o no
        abierto = false;
    }
    
}


//funcion para mostrar el submenu de Zona Central
function mostrarsubmenu1(){   
    
    //capturando a travez del id a los submenus
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    var menu3 = document.getElementById("menu3");

    //cambiando la propiedad para mostrar solo el submenu de Zona Central
    if(click == false){//validando si el submenu se presionó
        menu1.style.height = "auto";
        menu2.style.height = "0"
        menu3.style.height = "0"
        click = true;
    }else if(click == true){
        menu1.style.height = "0";
        click = false;
    }
    
}



//funcion para mostrar el submenu de
function mostrarsubmenu2(){

    //capturando a travez del id a los submenus
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    var menu3 = document.getElementById("menu3");

    //cambiando la propiedad para mostrar solo el submenu de Zona Occidental
    if(click == false){//validando si el submenu se presionó
        menu2.style.height = "auto";
        menu1.style.height = "0"
        menu3.style.height = "0"
        click = true;
    }else if(click == true){
        menu2.style.height = "0";
        click = false;
    }
    
}


//funcion para mostrar el submenu de
function mostrarsubmenu3(){    

    //capturando a travez del id a los submenus
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    var menu3 = document.getElementById("menu3");

    //cambiando la propiedad para mostrar solo el submenu de Zona Oriental
    if(click == false){//validando si el submenu se presionó
        menu3.style.height = "auto";
        menu2.style.height = "0"
        menu1.style.height = "0"
        click = true;
    }else if(click == true){
        menu3.style.height = "0";
        click = false;
    }
    
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}