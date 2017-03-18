$(document).ready(init);

var turno = 1; 
var arregloGato = new Array(9);
var turnoX= 0;
var turnoO = 0;
var celdaAMarcar;
var celda= $('.gato');
var queturno;

$.each(celda,function(){
        $(this).click(onClickSpace);
    });

function init ()
{  
    $('#reseting').on('click',reseting);
}

function onClickSpace(evento)
{
    var idceldas =  evento.target.id;
    celdaAMarcar = idceldas[1]-1;
    //alert(celdaAMarcar);
    queturno=turno%2;
    var gamer1=$('#gamer1').val();
    var gamer2=$('#gamer2').val();
    //TURNO X, turnos impares;
    if(queturno==1){
        if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "X";
            this.innerHTML= '<span><img src="img/blackcat.png" alt="" class="img-responsive animated flipInX"></span>';
             $('#turnos').text(gamer1);
            turnoX++;
            $('#countgame1').text(turnoX);
             ganaJugador("X",gamer1,gamer2);
            //turno=2; 
            }  
        }
    //TURNO X, turnos pares;
    else 
        {
            if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "O";
            this.innerHTML="<span><img src='img/whitecat.png' class='img-responsive animated flipInX' style='background:#fff;'></span>";
            $('#turnos').text(gamer2);
            turnoO++;
            $('#countgame2').text(turnoO);
            ganaJugador("O",gamer2,gamer1);
            //turno=1;
            }
        }
    console.log(turno,arregloGato);
    if(turno==9)
    {
         $('#respuesta').html('<span>Es un empate</span>');
    }else{
        turno++;
    }
    
}

function ganaJugador(letra,_gamerw,_gamerl){


    if(
    (arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra)|| 
    (arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra)|| 
    (arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra)||    
    (arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra)||
    (arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra)||
    (arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra)||
    (arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra)||
    (arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra)
    )
        {
            
            if(letra=="X"){
                $('#respuesta').html('Player <span>'+ _gamerw +'</span> win');
                $('#eldiv').append('<button class="btn_press" id="send_gaming">Send your game</button>');
                var contar=$('#countgame1').text();
                localStorage.setItem("winner",_gamerw);
                localStorage.setItem("loser",_gamerl);
                localStorage.setItem("number",contar);
                
            }else {
                $('#respuesta').html('Player <span>'+ _gamerw +'</span> win');
                $('#eldiv').append('<button class="btn_press" id="send_gaming">Send your game</button>');
                var contar=$('#countgame2').text();
                localStorage.setItem("winner",_gamerw);
                localStorage.setItem("loser",_gamerl);
                localStorage.setItem("number",contar);
            }
            
        }
}

function reseting(){
    var cat =$('.gato');
    cat.empty();
    arregloGato.length = 0;
    turno=1;
    turnoX= 0;
    turnoO = 0;
     $('#countgame1').empty();
     $('#countgame2').empty();
    $('#respuesta').empty();
    $('#eldiv button').remove();
}