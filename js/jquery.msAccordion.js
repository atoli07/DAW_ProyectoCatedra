
(function($){
    $.fn.msAccordion = function(options) {
        options = $.extend({
            currentDiv:'1',
            previousDiv:'',
            vertical: false,
            defaultid:0,
            currentcounter:0,
            intervalid:0,
            event:"click",
            alldivs_array:new Array()
        }, options);

        $(this).addClass("accordionWrapper");
        $(this).css({overflow:"hidden", width: "100%"});

        
        var elementid = $(this).attr("id");
        var allDivs = this.children();      

        
        allDivs.each(function(current) {
            var iCurrent = current;
            var sTitleID = elementid+"_msTitle_"+(iCurrent);
            var sContentID = sTitleID+"_msContent_"+(iCurrent);
            var currentDiv = allDivs[iCurrent];
            var titleDiv = $(currentDiv).find("div.title");
            titleDiv.attr("id", sTitleID);
            var contentDiv = $(currentDiv).find("div.content");
            contentDiv.attr("id", sContentID);
            options.alldivs_array.push(sTitleID);
            $("#"+sTitleID).bind(options.event,
            function(){pause();openMe(sTitleID);});
        });

        //se crea el acordeon
        if(options.vertical) {
            makeVertical();
        };

        //Se muestra abierto el primer elemento del acordeon
        openMe(elementid+"_msTitle_"+options.defaultid);
        


        //funcion que permite mostrar un nuevo elemento del acordeon
        function openMe(id) {
            var sTitleID = id;
            var iCurrent = sTitleID.split("_")[sTitleID.split("_").length-1];
            options.currentcounter = iCurrent;
            var sContentID = id+"_msContent_"+iCurrent;

            if($("#"+sContentID).css("display")=="none") {
                if(options.previousDiv!="") {
                    closeMe(options.previousDiv);
                };
                if(options.vertical) {
                    $("#"+sContentID).slideDown("slow");
                } else {
                    $("#"+sContentID).show("slow");
                }
                options.currentDiv = sContentID;
                options.previousDiv = options.currentDiv;
            };
        };


        //oculta el contenedor que se esta mostrando
        function closeMe(div) {
            if(options.vertical) {
                $("#"+div).slideUp("slow");
            } else {
                $("#"+div).hide("slow");
            };
        };


        //crea el acordeon
        function makeVertical() {
            $("#"+elementid +" > div").css({display:"block", float:"none", clear:"both"});
            $("#"+elementid +" > div > div.title").css({display:"block", float:"none", clear:"both"});
            $("#"+elementid +" > div > div.content").css({clear:"both", width: "100%"});
        };


        function pause() {
            window.clearInterval(options.intervalid);
        };
    }
})(jQuery);