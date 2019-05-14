/*eslint-env browser*/
$(document).ready(function () {
    "use strict";
    $('a').click(function (e) {
        e.preventDefault();
        $('a').removeAttr('style');
        $(this).css('color', 'orange');
        var lrg_img = $(this).attr('href');
        $('.sliderContainer').append('<img src="' + lrg_img + '"/>');
        
    });
});

