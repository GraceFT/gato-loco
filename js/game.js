$(document).ready(init);

var turno = 1; 
var arregloGato = new Array(9);
var player1=$('#gamer1').val();
var player2=$('#gamer2').val();
var turnoX= 0;
var turnoO = 0;
var  celdaAMarcar;
var celda= $('.gato');

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
    
    //TURNO X, turnos impares;
    if(turno==1){
        if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "X";
            turnoX+1;
            //console.log(player1);
             $('#turn').text(player1);
            ganaJugador("O");
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
            turnoO+1;
            this.innerHTML = '<span><img src="img/whitecat.png" alt="" class="img-responsive" style="background:#fff;"></span>';
            $('#count_game2').text(turnoX);
            $('#turn').text(player2);
            ganaJugador("O");
            turno=1;
            //$('#gaming2').val()=turnoO;  
            }
        }
    console.log(turno,arregloGato);
    if(turno>9)
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
    var ganador= $('#respuesta');
    ganador.empty();
    turno=1;
}