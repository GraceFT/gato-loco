$(document).ready(init);
var currentSection= null;


function init()
{
    //alert("hola");
    currentSection= $('#welcome');
    $('#btn_welcome').click(onClickSaludo);
    $('#btn_gamer').click(onClickGamer);
    //TweenMax.to('#btn-saludo', 2, {opacity:0, ease: Bonce.easeOut});
    //primer parametro es el identificador de donde quiero hacer mi animacion
    //elemento css
}
function onClickSaludo(){
    goToSection('gamers');
}
function onClickGamer(){
    goToSection('game');
}

function goToSection(_id)
{
    currentSection.removeClass('visible');//display show
    var nextSection = $('#'+_id);
    nextSection.addClass('visible'); //display block
    //TweenMax.from(nextSection,0.5,{scale:0.5, opacity:0, ease:Elastic.easeOut})
    currentSection=nextSection;
    //se le va a plicar a todas las pantallas
}