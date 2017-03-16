$(document).ready(init);

var turno = 1; 
var arregloGato = new Array(9);
var turnoX= 0;
var turnoO = 0;
var  celdaAMarcar;
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
    //TURNO X, turnos impares;
    if(queturno==1){
        if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "X";
            this.innerHTML= '<span><img src="img/blackcat.png" alt="" class="img-responsive"></span>';
             $('#turnos').text($('#gamer1').val());
            ganaJugador("X");
            turnoX++;
            $('#countgame1').text(turnoX);
            //turno=2; 
            }  
        }
    //TURNO X, turnos pares;
    else 
        {
            if(arregloGato[celdaAMarcar]==null){
            arregloGato[celdaAMarcar] = "O";
            this.innerHTML = '<span><img src="img/whitecat.png" alt="" class="img-responsive" style="background:#fff;"></span>';
            $('#turnos').text($('#gamer2').val());
            ganaJugador("0");
            turnoO++;
            $('#countgame2').text(turnoO);
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

function ganaJugador(letra){
    var gamer1=$('#gamer1').val();
    var gamer2=$('#gamer2').val();
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
                $('#respuesta').html('Jugador <span style="">'+ gamer1 +'</span> GANA');
            }else{
                $('#respuesta').html('Jugador <span style="">'+ gamer2 +'</span> GANA');
            }
            
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