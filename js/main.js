$(document).ready(init);
var currentSection= null;
var currrentGameId;

function init()
{
    //alert("hola");
    currentSection= $('#welcome');
    $('#btn_welcome').click(onClickSaludo);
    $('#btn_gamer').click(onClickGamer);
    //console.log($('#btn_story'));
    $('#btn_story').click(onClickStory);
    $('#list_games').on('click','.btn', onClickBtnItemStory);
    $('#btn_comment').click(onClickBtnComment);
    $('#btn_initial').click(onClickBackInit);
    //TweenMax.to('#btn-saludo', 2, {opacity:0, ease: Bonce.easeOut});
    //primer parametro es el identificador de donde quiero hacer mi animacion
    //elemento css
    
}
function onClickBackInit(){
    goToSection('initializing');
}
function onClickBtnComment(){
    //alert('hola');
   sendComment(currrentGameId, $('#name').val(), $('#content').val());
}
function onClickBtnItemStory(){
    //alert('holis');
    var idGame= $(this).parent().data('idgame');
    console.log('idGame');
    //getSingleGame(idGame);
    goToSection('story_detail');
    getComments(idGame);
    currrentGameId= idGame;
}
function onClickSaludo(){
    goToSection('gamers');
}
function onClickGamer(){
    goToSection('game');
}
function onClickStory(evt){
    evt.preventDefault();
    goToSection('story');
    getHistorial();
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
function getHistorial(){
    $.ajax({
        url:'http://test-ta.herokuapp.com/games'
        //en la consola en network se puede visualizar todo lo que se tiene.
    }).done(function(_data){
        //console.log(_data);
        drawStory(_data);
    });
    //si falla bloquea.
}
//una fucnion que recibe parametros obtiene una referencia al id de la lista juegos y luego uso el metodo html en el que esta la informaction

function drawStory(_datos){
    //console.log(_datos);
    var list=$('#list_games');
    for(var i in _datos){
        //console.log(_datos[i].winner_player);
        var html = '<div class="col-md-11 col-sm-11 col-xs-11 list_games" data-idgame="'+ _datos[i].id+'" class="list-group-item"><span>Ganador: '+ _datos[i].winner_player+' le gano a '+ _datos[i].loser_player+'en '+ _datos[i].number_of_turns_to_win+'</span><button class=" btn btn_ver pull-right">See</button><div>';
        list.append(html); 
        //data-xx(para almacenar los datos que se necesitan);
        //dat-idgame
    }
    //try{}
    //error controlado
}

function getSingleGame(_idGame){
    
    $.ajax({
        url:'http://test-ta.herokuapp.com/games/' + _idGame,
        //:game_id, ?game_id, [game_id], {game_id?} se refiere al id del juego, indican que ese segmento es un parametro. 
        //para obtner el id solo se pasa por parametro 
        type: 'GET'
        //en la consola en network se puede visualizar todo lo que se tiene.
    }).done(function(_data){
        console.log(_data);
    });
}
function getComments(_idGame){
    
    $.ajax({
        url:'http://test-ta.herokuapp.com/games/' + _idGame+'/comments',
        type: 'GET'
    }).done(function(_data){
        console.log(_data);
        drawComments(_data);
    });
}
function drawComments(_datos){
    //console.log(_datos);
    var list=$('#list_comments');
    list.empty();
    for(var i in _datos){
        //console.log(_datos[i].winner_player);
        var html = '<li class="list-group-items">'+ _datos[i].name+' dice:<p> '+ _datos[i].content+'</p><li>';
        list.append(html);
        //data-xx(para almacenar los datos que se necesitan);
        //dat-idgame
    }
    //try{}
    //error controlado
}
//funcion independeinte
function sendComment(_idGame,_name,_content){
     $.ajax({
        url:'http://test-ta.herokuapp.com/games/' + _idGame+'/comments',
        type: 'POST',
        data:{comment:{name:_name, content:_content, game_id:_idGame}}
    }).done(function(_data){
        console.log(_data);
        getComments(_idGame);
        
    });
}