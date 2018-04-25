$(document).ready(function(){
	//generalSettings();
	settingsSectionSesion();

	//-
	showSectionPage('#sesion');


});// end - documentReady

$(window).resize(function(){
	//generalSettings();
	//settingsSectionSesion();
});

function generalSettings(){

	$('#map').css({
		'height' : '300px'
	});
	
	$('.dg-seccion').css({
		'padding-top' : $('.navbar-fixed-top').outerHeight() + 'px'
	});
	setTimeout(function(){
		if($(window).height() > 768){
			$('.dg-contentimg').css({
				'height':   $('.dg-contentimg').width() + 'px'
			});
		}
		else{
			$('.dg-contentimg').css({
				'height':   $('.dg-contentimg').width() + 'px'
			});
		}
	
	}, 700);

	resizeMinHeight($(window), $('.dg-seccion'));
}// end - generalSettings

function settingsSectionSesion(){
	$('.dgcontent-logo img').addClass('animated');
	$('.dg-content-slogan').addClass('animated');
	$('.dg-content-input img').addClass('animated swing');

	$('.dgcontent-logo img').animateCss('rubberBand');
	$('.dg-content-slogan').animateCss('bounceInLeft');
}// end - settingsSectionsesion

function showSectionPage(idSection){
	$(idSection).removeClass('hidde').addClass('active');
	$(idSection).addClass('animated zoomIn');

	//addEventsAnimations(idSection);

}

function hiddenSectionPage(element){
	var idSection = $(element).attr('href');
	$(idSection).removeClass('active').addClass('hidde');
}

function addEventsAnimations(idElement){
	//--
	setTimeout(function(){
	  $(idElement + ' .dg-content-img').addClass('zoom');
	  setTimeout(function(){
	    $(idElement + ' .dg-content-img').removeClass('zoom');
	  },6000);
	}, 2000);

	//--
	$('.dg-content-img .dg-content-text').addClass('animated fadeInLeftBig');


	$('.dg-photoleft .dg-contentinfo').addClass('scrollflow -slide-left');
	$('.dg-photoleft .dg-slogan').addClass('scrollflow -pop');
	$('.dg-photoleft .dg-contentimg').addClass('scrollflow -slide-right');

	$('.dg-photoright .dg-contentinfo').addClass('scrollflow -slide-right');
	$('.dg-photoright .dg-contentimg').addClass('scrollflow -slide-left');

	$('.dg-content-slogan').addClass('scrollflow -slide-top -pop -opacity');

	$('.dg-icons-beneficios').addClass('scrollflow -slide-top -pop -opacity');

	$('.dg-contentlogos .dg-logo').addClass('scrollflow -pop');
	$('.dg-contentlogos .dg-logo.dg-logo-left').addClass('-opacity');
	$('.dg-contentlogos .dg-logo.dg-logo-right').addClass('-opacity');

	$('.dg-seccion-app #dg-imgmobil').addClass('animated tada');
	$('.dg-sloganapp').addClass('animated bounceInRight');

	$('#dg-contentredes .navbar-nav').addClass('animated bounceInRight');

}
