/*Скрипт в первый слайдер*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);	
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("upper-slider__wrap");
	let coin = document.getElementsByClassName("coin");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < coin.length; i++) {
		coin[i].className = coin[i].className.replace("active","");
	}
	slides[slideIndex - 1].style.display = "flex";
	coin[slideIndex - 1].className += " active";
}


/*Скрипт во второй слайдер*/
let slideIndex__2 = 1;
showSlides__2(slideIndex__2);

function plusSlides__2(n) {
	showSlides__2(slideIndex__2 += n);
}

function currentSlide__2(n) {
	showSlides__2(slideIndex__2 = n);	
}

function showSlides__2(n) {
	let j;
	let slides__2 = document.getElementsByClassName("second-upper-slider__wrap");
	let coin__2 = document.getElementsByClassName("coin-second");

	if (n > slides__2.length) {
		slideIndex__2 = 1
	}
	if (n < 1) {
		slideIndex__2 = slides__2.length
	}
	for (j = 0; j < slides__2.length; j++) {
		slides__2[j].style.display = "none";
	}
	for (j = 0; j < coin__2.length; j++) {
		coin__2[j].className = coin__2[j].className.replace("active","");
	}
	slides__2[slideIndex__2 - 1].style.display = "flex";
	coin__2[slideIndex__2 - 1].className += " active";
}



/*Скрипт в третий слайдер*/
/*let slideIndex__3 = 1;
showSlides__3(slideIndex__3);

function plusSlides__3(n) {
	showSlides__3(slideIndex__3 += n);
}

function currentSlide__3(n) {
	showSlides__3(slideIndex__3 = n);	
}

function showSlides__3(n) {
	let k;
	let slides__3 = document.getElementsByClassName("otzivy-slider__text");
	let coin__3 = document.getElementsByClassName("coin-3");

	if (n > slides__3.length) {
		slideIndex__3 = 1
	}
	if (n < 1) {
		slideIndex__3 = slides__3.length
	}
	for (k = 0; k < slides__3.length; k++) {
		slides__3[k].style.display = "none";
	}
	for (k = 0; k < coin__3.length; k++) {
		coin__3[k].className = coin__3[k].className.replace("active","");
	}
	slides__3[slideIndex__3 - 1].style.display = "flex";
	coin__3[slideIndex__3 - 1].className += " active";
}*/



// Get the modal
let modal = document.getElementById('myModal');
let img = document.getElementsByClassName('connect-form');

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal.style.display = "block";

    }
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

//<===============================================================>
		/*КАЛЬКУЛЯТОР РАСЧЕТА ПРИМЕРНОЙ СТОИМОСТИ */	
//<===============================================================>
let result = ['7000','5000'];
//<===============================================================>
$(function(){
	$('#org-type').click(function(){
		//Умолчание для ИП
		if ($('#org-type :selected').val() == 'ИП'){
			$('#no-type').empty();
			$('#no-type').append('<option>ОСНО (основная система налогооблажения)</option>');
			$('#no-type').append('<option>УСН, ЕНВД, патент</option>');
			$('#no-type option:contains("ОСНО (основная система налогооблажения)")').prop('selected', true);
			$('#price-result').html(result[1]);
		}
		//Умолчание для ООО
		else if($('#org-type :selected').val() == 'ООО'){
			$('#no-type').empty();
			$('#no-type').append('<option>ОСНО (основная система налогооблажения)</option>');
			$('#no-type').append('<option>УСН, ЕНВД</option>');
			$('#no-type option:contains("ОСНО (основная система налогооблажения)")').prop('selected', true);
			$('#price-result').html(result[0]);
		}
	})
	$('#no-type').click(function(){
		//изменение на УСН, ЕНВД
		if (($('#no-type :selected').val() == 'УСН, ЕНВД') || ($('#no-type :selected').val() == 'УСН, ЕНВД, патент')){
			$('#price-result').html(result[1]);
		}
		//уникальная цена для ООО на ОСНО
		else if (($('#no-type :selected').val() == 'ОСНО (основная система налогооблажения)') && ($('#org-type :selected').val() == 'ООО')){
			$('#price-result').html(result[0]);
		}
	})
});