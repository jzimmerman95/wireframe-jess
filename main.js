function scrollDown() {
	$('body').animate({ scrollTop: $('.blue').offset().top }, 1000);
}

function scrollUp() {
	$('body').animate({ scrollTop: $('.pink').offset().top }, 1000);
}

function showImage() {
	document.getElementById('puppy').style.display = 'block';
}

function hideImage() {
	document.getElementById('puppy').style.display = 'none';
}

function fadeIn() {
	$('#puppy').hide();
	$('#puppy').fadeIn(1000);
}

function fadeOut() {
	$('#puppy').show();
	$('#puppy').fadeOut(1000);
}


$(window).scroll(function() {
	console.log($(window).scrollTop());

	var breakpoint = 2025;

	if ($(window).scrollTop() >= breakpoint){
		$('.teal').css('visibility', 'visible').hide().fadeIn(1500);
		$(this).off('scroll');
	}

});











	// var offset = 1900;

	// if ($(window).scrollTop() >= offset){
	// 	$('.div-4').css('visibility', 'visible').hide().fadeIn(1500);
	// 	$(this).off('scroll');
	// }





















