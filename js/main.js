$(document).ready(init);
var currentSection= null;
var currrentGameId;
///+++++++++++++++++++++++++++++++++++++++INIT++++++++++++++++++++++++++++++++++++///
function init()
{
    currentSection= $('#welcome');
    $('#btn_welcome').click(onClickSaludo);
    $('#btn_gamer').click(onClickGamer)
    $('#btn_story').click(onClickStory);
    $('#list_games').on('click','.btn', onClickBtnItemStory);
    $('#btn_comment').click(onClickBtnComment);
    $('#btn_initial').click(onClickBackInit);
    $('#send_gaming').click(sendGaming);
    //TweenMax.to('#btn-saludo', 2, {opacity:0, ease: Bonce.easeOut});
    //primer parametro es el identificador de donde quiero hacer mi animacion
    //elemento css
    $('#gamer1').keyup(validateName);
    $('#gamer2').keyup(validateNames2);
}
///+++++++++++++++++++++++++++++++++++++++PAGINATION++++++++++++++++++++++++++++++++++++///
function onClickBackInit()
{
    goToSection('welcome');
}

function onClickBtnComment()
{
   sendComment(currrentGameId, $('#name').val(), $('#content').val());
}

function onClickBtnItemStory()
{
    var idGame= $(this).parent().data('idgame');
    console.log('idGame');
    //getSingleGame(idGame);
    goToSection('story_detail');
    getComments(idGame);
    currrentGameId= idGame;
}

function onClickSaludo()
{
    goToSection('gamers');
}

function onClickGamer()
{
    validateName();
    validateNames2();
    if(validateName() && validateNames2){
    $('#gaming1').text("Movements of " + $('#gamer1').val());
    $('#gaming2').text("Movements of " + $('#gamer2').val());
        goToSection('game');
    } 
}

function onClickStory(evt)
{
    evt.preventDefault();
    goToSection('story');
    getHistorial();
}
///+++++++++++++++++++++++++++++++++++++++GO SECTIONS++++++++++++++++++++++++++++++++++++///
function goToSection(_id)
{
    currentSection.removeClass('visible');//display show
    var nextSection = $('#'+_id);
    nextSection.addClass('visible'); //display block
    TweenMax.from(nextSection, 1.5, {scale: 0.2, opacity: 0, ease: Elastic.easeOut});
    currentSection=nextSection;
    //se le va a plicar a todas las pantallas
}
///+++++++++++++++++++++++++++++++++++++++GET HISTORIAL AJAX++++++++++++++++++++++++++++++++++++///
function getHistorial(){
    $.ajax({
        url:'https://test-ta.herokuapp.com/games'
        //en la consola en network se puede visualizar todo lo que se tiene.
    }).done(function(_data){
        //console.log(_data);
        drawHistory(_data);
    });
    //si falla bloquea.
}
//una fucnion que recibe parametros obtiene una referencia al id de la lista juegos y luego uso el metodo html en el que esta la informaction
///+++++++++++++++++++++++++++++++++++++++DRAWING HISTORY++++++++++++++++++++++++++++++++++++///
function drawHistory(_datos)
{
    //console.log(_datos);
    var list=$('#list_games');
    for(var i in _datos){
        //console.log(_datos[i].winner_player);
        var html = '<li data-idgame="'+ _datos[i].id+'" class="list-group-item"><span>'+ _datos[i].winner_player+' le gano a '+ _datos[i].loser_player+' en '+ _datos[i].number_of_turns_to_win+' movimientos</span><br><button class=" btn btn_ver">See</button><li>';
        list.append(html); 
        //data-xx(para almacenar los datos que se necesitan);
        //dat-idgame
    }
    //try{}
    //error controlado
}
///+++++++++++++++++++++++++++++++++++++++GET A SINGLE GAME++++++++++++++++++++++++++++++++++++///
function getSingleGame(_idGame)
{
    
    $.ajax({
        url:'https://test-ta.herokuapp.com/games/' + _idGame,
        //:game_id, ?game_id, [game_id], {game_id?} se refiere al id del juego, indican que ese segmento es un parametro. 
        //para obtner el id solo se pasa por parametro 
        type: 'GET'
        //en la consola en network se puede visualizar todo lo que se tiene.
    }).done(function(_data){
        console.log(_data);
    });
}
///+++++++++++++++++++++++++++++++++++++++GETTING COMMENTS++++++++++++++++++++++++++++++++++++///
function getComments(_idGame)
{
    $.ajax({
        url:'https://test-ta.herokuapp.com/games/' + _idGame+'/comments',
        type: 'GET'
    }).done(function(_data){
        console.log(_data);
        drawComments(_data);
    });
}
///+++++++++++++++++++++++++++++++++++++++DRAWING COMMENTS++++++++++++++++++++++++++++++++++++///
function drawComments(_datos)
{
    //console.log(_datos);
    var list=$('#list_comments');
    list.empty();
    for(var i in _datos){
        //console.log(_datos[i].winner_player);
        var html = '<li class="list-group-items"><span style="font-size:20px;">'+ _datos[i].name+'</span> dice:<p> '+ _datos[i].content+'</p><li>';
        list.append(html);
        //data-xx(para almacenar los datos que se necesitan);
        //dat-idgame
    }
    //try{}
    //error controlado
}
///+++++++++++++++++++++++SENDING GAME++++++++++++++++++++++++++++++++++++///
function sendGaming()
{
    var winner=localStorage.getItem("winner");
    var loser=localStorage.getItem("loser");
    var numbGame=localStorage.getItem("number");
     $.ajax({
        url:'https://test-ta.herokuapp.com/games',
        type: 'POST',
        data:{game:{winner_player:winner, loser_player:loser, number_of_turns_to_win:numbGame}}
    }).done(function(_data){
        console.log(_data);
        alert("se envio al historial");
    });
}

///+++++++++++++++++++++++SENDING COMMENTS/SEPARATE FUNCTION++++++++++++++++++++++++++++++++++++///
function sendComment(_idGame,_name,_content)
{
     $.ajax({
        url:'https://test-ta.herokuapp.com/games/' + _idGame+'/comments',
        type: 'POST',
        data:{comment:{name:_name, content:_content, game_id:_idGame}}
    }).done(function(_data){
        console.log(_data);
        getComments(_idGame);
        
    });
}
///+++++++++++++++++++++++++++++++++++++++VALIDATING FORM++++++++++++++++++++++++++++++++++++///
function validateName(){
    var valName=$("#gamer1");
    var isName= false;
    if(valName.val().length > 0 && valName.val().match(/^[a-zA-Z\s]*$/)){
        $("#avise").html('<span style="color:white; font-size:11px; font-style:italic;">Validate Name</span>');
        isName=true;
    }else{
        $("#avise").html('<span style="color:lightseagreen; font-size:11px; font-style:italic;">Complete with your name </span>');
        isName=false;
    }
    return isName;
}
function validateNames2(){
    var valNameSecond=$("#gamer2");
    var isName= false;
    if(valNameSecond.val().length > 0 && valNameSecond.val().match(/^[a-zA-Z\s]*$/)){
        $("#avise2").html('<span style="color:white; font-size:11px; font-style:italic;">Validate Name</span>');
        isName=true;
    }else{
        $("#avise2").html('<span style="color:lightseagreen; font-size:11px; font-style:italic;">Complete with your name </span>');
        isName=false;
    }
    return isName;
}