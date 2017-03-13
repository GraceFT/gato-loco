$(document).ready(init);

var turno = 1; 
var queturno;
var arregloGato = new Array(9);
var turn = $('#turn');
//var reset = $('#reset').click(reseting);

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
    var idceldas =  evento.target.id;
    
    var celdaAMarcar = idceldas[1]-1;
    //alert(celdaAMarcar);
    
    queturno = turno%2;
    //TURNO X, turnos impares;
    if(queturno==1)
        {
            celdas.innerHTML="X";
            //celdas.css('background','#Ec673a');
            arregloGato[celdaAMarcar] = "X";
            ganaJugador("X");
        }
    //TURNO X, turnos impares;
    else 
        {
            celdas.innerHTML = "O";
            //celdas.css('background-color','#1c5f81');
            arregloGato[celdaAMarcar] = "O";
            ganaJugador("O");
            
        }
    console.log(turno,queturno,arregloGato);
    if(turno==9)
    {
        alert("Empate");
        //console.log(window.location);
        //window.location.reload();
    }
    else{
        turno++;
    }
    
}
/*function reseting(){
    $('.gato').empty();
    
}*/