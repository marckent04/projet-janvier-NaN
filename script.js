$(document).ready(function () {
    let taille = screen.availHeight;
    $('header').css('height',taille);
    
    let imgT = $('#gastronomie img').css('height');
     imgT = parseFloat(imgT) + 40 + 'px';
    $('#gastronomie .case').css('height',imgT);
});