$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$('.navbar-fixed-left li').click(function(){
	$('.navbar-fixed-left li').removeClass('active')
	$(this).addClass('active')
	window.location.replace($(this).attr('data-page'));
})
