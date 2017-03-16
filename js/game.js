$(document).ready(init);

var turno = 1; 
var queturno;
var arregloGato = new Array(9);
var reset = $('#reset').click(reseting);
var turnoX= 0;
var turnoO = 0;

function init ()
{
    var celda= $('.gato');
    //console.log(celda);
    $('#gato').on('click',celda,onClickSpace);
    
}
//combinaciones de jugadas
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
            
            $('#respuesta').html('<span>Jugador ' + letra +' GANA</span>');
            //window.location.reload();
        }
}
function onClickSpace(evento)
{
    var celdas= evento.target;
    var idceldas =  evento.target.id;
    var celdaAMarcar = idceldas[1]-1;
    //alert(celdaAMarcar.value());
    
    queturno = turno%2;
    turnoX=queturno;
    //TURNO X, turnos impares;
    if(queturno==1)
        {
            if(celdaAMarcar)
            celdas.innerHTML= '<span><img src="img/blackcat.png" alt="" class="img-responsive"></span>';
            arregloGato[celdaAMarcar] = "X";
            //console.log(queturno);
            
            //$('#count_game1').txt(turnXX);
            //var player1=$('#gamer_1').val();
            ganaJugador("X");
            
            //$('#gaming1').val()=turnoX;
            
        }
    //TURNO X, turnos pares;
    else 
        {
            celdas.innerHTML = '<span><img src="img/whitecat.png" alt="" class="img-responsive" style="background:#fff;"></span>';
            arregloGato[celdaAMarcar] = "O";
            //turnoO++;
            //$('#count_game2').text(turnoO);
            //var player2=$('#gamer_2').val();
            ganaJugador("O");
            
            //ganaJugador("O");
            
            //$('#gaming2').val()=turnoO;
        }
    console.log(turno,queturno,arregloGato);
    if(turno==9)
    {
         $('#respuesta').html('<span>Es un empate</span>');;
        //console.log(window.location);
        //window.location.reload();
    }
    else{
        turno++;
        console.log(turno);
    }
    
}
function reseting(){
    arregloGato= "";
    
}