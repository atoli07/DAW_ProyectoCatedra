function ajaxRequest(){
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];

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


var request = new ajaxRequest();
request.onreadystatechange = function(){

    if(request.readyState==4){

        if(request.status==200 || window.location.href.indexOf("http")==-1){

            var jsondata = JSON.parse(request.responseText);
            var Datos = jsondata.items;
            var content="<h2>Grupo de trabajo</h2>";

            for(var i=0; i<Datos.length; i++){
                content += "<p>";
                content += "<img src='" + Datos[i].imagen + "'/><br/><br/>";
                content += "<b>Nombre:</b> "+Datos[i].nombre+".<br/><br/>";
                content += "<b>Carné:</b> "+Datos[i].carnet+".<br/><br/>";
                content += "<b>Edad:</b> "+Datos[i].edad+".<br/><br/>";
                content += "<b>Carrera:</b> "+Datos[i].carrera+".<br/><br/>";        
                content += "</p>";
            }
            content += "</ul>";
            document.getElementById("equipo").innerHTML = content;
        }
        else{
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

request.open("GET", "json/Desarrolladores.json", true);
request.send(null);