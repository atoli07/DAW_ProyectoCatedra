$(document).ready( function() { 
    
    // creando el evento click al boton que redirecciona a la parte superior de la pagina
    $("a[href='#arriba'").click(function() {
        //creando la animacion para el scroll
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    
    // creando el evento click a las opciones que redirecciona a una seccion de la pagina
    $('.opSubmenu').click(function () {
        //creando la animacion para el scroll capturando la url de la seccion a redireccionar
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, "slow");

        return false;
    });

} );