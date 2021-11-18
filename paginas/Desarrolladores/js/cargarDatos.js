function ajaxRequest(){
    //Creacion de array con cadenas para creación de objeto ActiveX
    //en caso de navegadores antiguos de Internet Explorer
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; 
    //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
    if(window.ActiveXObject){ 
        for(var i=0; i<activexmodes.length; i++){
            try{
                return new ActiveXObject(activexmodes[i]);
            }
            catch(e){
                return false;
            }
        }
    }
    // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
    else if (window.XMLHttpRequest){ 
        return new XMLHttpRequest();
    }
    else{
        return false;
    }
}

//crwando la peticion
var request = new ajaxRequest();

//creando evencho cuando cambie el estado
request.onreadystatechange = function(){
    if(request.readyState==4){//comprobando que el estado sea igual a 4
        if(request.status==200 || window.location.href.indexOf("http")==-1){
        
        //Recibir resultado como un objeto de JavaScript usando el método parse()
            var jsondata = JSON.parse(request.responseText);
            var dat = jsondata.datos;
            var content="<h2>Grupo de trabajo</h2>";    
            
            for(var i=0; i<dat.length; i++){
                content += "<p>";
                content += "<img src='" + dat[i].imagen + "'/><br/><br/>";
                content += "<b>Nombre:</b> "+dat[i].nombre+".<br/><br/>";
                content += "<b>Carné:</b> "+dat[i].carnet+".<br/><br/>";
                content += "<b>Edad:</b> "+dat[i].edad+".<br/><br/>";
                content += "<b>Carrera:</b> "+dat[i].carrera+".<br/><br/>";        
                content += "</p>";              
            }
            
            document.getElementById("equipo").innerHTML = content;
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

request.open("GET", "Json/desarrolladores.json", true);
request.send(null);