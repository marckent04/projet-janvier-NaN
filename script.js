$(document).ready(function () {
    let taille = screen.availHeight;
    $('header').css('height',taille);

    console.log($('htnl').css('height'));
    let imgT = $('#gastronomie img').css('height');
     imgT = parseFloat(imgT) + 40 + 'px';

    console.log($('#app').css('width'));

    console.log($('#header').css('width'));

    $('#gastronomie .case').css('height',imgT);
});