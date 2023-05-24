"use strict";

$(function () {
    /**
     * id selector
     * @type {*|jQuery}
     */
    // alert( 'The DOM has finished loading!' );
    /**
     * class selector
     * @type {*|jQuery}
     */
    var contents = $('#codeup').html();
    alert(contents);
    $('.important').css('background-color', 'yellow');

    /**
     * element selector
     */
    $('p').css('font-size', '32px');

    /**
     * multiple selector
     */
    $('.important, p').css('background-color', '#FF0');
    /**
     * all selector
     */
    $('*').css('border', '1px solid #F00');

});

