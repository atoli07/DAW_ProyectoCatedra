$(document).ready(function(){
	var imgItems = $('.slider li').length; // cantidad de fotos
	var imgPos = 1;

	
	$('.slider li').hide(); // Ocultando todas las imagenes
	$('.slider li:first').show(); // se muestra la primer imagen
	
    //evento click para los botones de siguiente
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


    //funcion para cambiar las imagenes cada 4s
	setInterval(function(){
		nextSlider();
	}, 4000);

	//funcion que se ejecuta cuando se presiona el boton de siguiente
	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.slider li').hide(); // Ocultando todas las imagenes
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // mostrando la imagen que corresponde con el indice

	}

    //funcion que se ejecuta cuando se presiona el boton de regresar
	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider li').hide(); //Ocultando todas las imagenes
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // mostrando la imagen que corresponde con el indice
	}

});