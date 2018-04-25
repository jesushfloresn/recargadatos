//---Functions General Solutions
var digiall = {

};

function resizeMinHeight(referenceContent, elementAffect){
	$(elementAffect).css({
		'min-height' : ($(referenceContent).height()) + 'px'
	});
}// end - resizeSectionFull


//---
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});