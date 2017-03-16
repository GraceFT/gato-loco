$(document).ready(init);

var turno = 1; 
var queturno;
var arregloGato = new Array(9);
//var turn = $('#turn');
//console.log(turn);
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
    //alert(evento.target.id);
    //alert(idceldas.length);//numero de caracteres que tiene el id;
    //alert(idceldas[1]);
    //posicion a marcar el -1 es porque las posiciones comienzan en cero 
    
    var celdas= evento.target;
    //console.log(celda);
    var idceldas =  evento.target.id;
    
    var celdaAMarcar = idceldas[1]-1;
    //alert(celdaAMarcar);
    
    queturno = turno%2;
    //TURNO X, turnos impares;
    if(queturno==1)
        {
            celdas.innerHTML= '<span><img src="img/blackcat.png" alt="" class="img-responsive"></span>';
            arregloGato[celdaAMarcar] = "X";
            ganaJugador("X");
            turnoX++;
            //$('#gaming1').val()=turnoX;
            
        }
    //TURNO X, turnos pares;
    else 
        {
            celdas.innerHTML = '<span><img src="img/whitecat.png" alt="" class="img-responsive" style="background:#fff;"></span>';
            arregloGato[celdaAMarcar] = "O";
            ganaJugador("O");
            turnoO++;
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
    }
    
}
function reseting(){
    arregloGato= "";
    
}