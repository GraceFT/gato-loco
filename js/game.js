$(document).ready(init);

var turno = 1; 
var queturno;
var arregloGato = new Array(9);
var player1=$('#gamer1').val();
var player2=$('#gamer2').val();
var turnoX= 0;
var turnoO = 0;
var  celdaAMarcar;
var celda= $('.gato');

$.each(celda,function(){
        $(this).click(onClickSpace);
         //alert("ihii");
    });

function init ()
{  
    $('#reseting').on('click',reseting);
    $('#turn').html('<span>Player turn: '+player1+'</span>');
    $('#count_game1').text(turnoX);
    $('#count_game2').text(turnoO);
    $('#gaming1').text("Movements's " + player1);
    $('#gaming2').text("Movements's " + player2);
}
function onClickSpace(evento){
    
}
function onClickSpace(evento)
{
    var idceldas =  evento.target.id;
    celdaAMarcar = idceldas[1]-1;
    //alert(celdaAMarcar);
    
    queturno = turno%2;
    //TURNO X, turnos impares;
    if(queturno==1){
        if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "X";
            turnoX++;
            this.innerHTML= '<span><img src="img/blackcat.png" alt="" class="img-responsive"></span>';
            $('#count_game1').text(turnoX);
            
            ganaJugador("X");
            turno=2;
                //$('#gaming1').val()=turnoX; 
            }  
        }
    //TURNO X, turnos pares;
    else 
        {
            if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "O";
            turnoO++;
            this.innerHTML = '<span><img src="img/whitecat.png" alt="" class="img-responsive" style="background:#fff;"></span>';
            $('#count_game1').text(turnoX);
            $('#turn').html('<span>Player turn: '+player1+'</span>');
            ganaJugador("O");
            turno=1;
            //$('#gaming2').val()=turnoO;  
            }
        }
    console.log(queturno,turno,arregloGato);
    if(turno==9)
    {
         $('#respuesta').html('<span>Es un empate</span>');
    }
    
}
function ganaJugador(letra){
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
            
            $('#respuesta').html('Jugador <span style="">'+ letra +'</span> GANA');
        }
}
function reseting(){
    var cat =$('.gato');
    //console.log(cat);
    cat.empty();
    arregloGato.length = 0;
    ganaJugador();
}