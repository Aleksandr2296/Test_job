$(document).ready(function () {
    var menuBtn = $('.menu_btn');
    var menu = $('.menu');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('menu__active');

    });


});
