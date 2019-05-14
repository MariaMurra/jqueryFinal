/*eslint-env browser*/
$(document).ready(function () {
    "use strict";
    $('.tab-container').hide();
    
    $('#Tab-nav li').click(function (e) {
        $('#tab-container div').hide();
        $('#Tab-nav .active-tab').removeClass("active-tab");
        $(this).addClass('active-tab');
        
        var clicked = $(this).find('a:first').attr('href');
        $('#tab-container div' + clicked).fadeIn('fast');
        e.preventDefault();
    }).eq(0).addClass('active-tab');
});
