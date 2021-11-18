$(document).ready(function(){
	var imgItems = $('.cotenido-banner li').length; // cantidad de fotos
	var imgPos = 1;

	
	$('.cotenido-banner li').hide(); // Ocultando todas las imagenes
	$('.cotenido-banner li:first').show(); // se muestra la primer imagen

    //funcion para cambiar las imagenes cada 4s
	setInterval(function(){
		nextSlider();
	}, 4000);

	//funcion que se ejecuta cuando se presiona el boton de siguiente
	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.cotenido-banner li').fadeOut(); // Ocultando todas las imagenes
		$('.cotenido-banner li:nth-child('+ imgPos +')').fadeIn(); // mostrando la imagen que corresponde con el indice

	}
});