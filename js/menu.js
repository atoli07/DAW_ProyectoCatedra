var click = false;//variable para saber si se dio click en una opcion

$(document).ready( function() { 
    
    //proceso para mostrar el menu
    $("#btnmostrarMenu").toggle(colocarClase, quitarClase);

    //proceso para mostrar el submenu 1
    $("#submenu1").click(mostrarsubmenu1);

    //proceso para mostrar el submenu 2
    $("#submenu2").click(mostrarsubmenu2);

    //proceso para mostrar el submenu 3
    $("#submenu3").click(mostrarsubmenu3);

} );



function colocarClase(){
    //desplegando el menu
    $("#mostrarMenu").toggleClass("activado");
    $("#barra1").toggleClass("barra-1");
    $("#barra2").toggleClass("barra-2");
    $("#barra3").toggleClass("barra-3");
}

function quitarClase(){
    $("#mostrarMenu").toggleClass("activado");
    //agregando clase a las barras del menu
    $("#barra1").toggleClass("barra-1");
    $("#barra2").toggleClass("barra-2");
    $("#barra3").toggleClass("barra-3");
}



function mostrarsubmenu1(){  
    //proceso para mostrar el submenu 1 
    if(click == false){//validando si el submenu se presionó

        $("#menu1").css("height","auto");
        $("#menu2").css("height","0");  
        $("#menu3").css("height","0");  
        click = true;

    }else if(click == true){

        $("#menu1").css("height","0"); 
        click = false;
    }
}




function mostrarsubmenu2(){  
    //proceso para mostrar el submenu 2 
    
    if(click == false){//validando si el submenu se presionó

        $("#menu2").css("height","auto");
        $("#menu1").css("height","0");  
        $("#menu3").css("height","0");  
        click = true;

    }else if(click == true){

        $("#menu2").css("height","0"); 
        click = false;
    }
}



function mostrarsubmenu3(){   
    //proceso para mostrar el submenu 3
    
    if(click == false){//validando si el submenu se presionó

        $("#menu3").css("height","auto");
        $("#menu1").css("height","0");  
        $("#menu2").css("height","0");  
        click = true;

    }else if(click == true){

        $("#menu3").css("height","0"); 
        click = false;
    }
}
