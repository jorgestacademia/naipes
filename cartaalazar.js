
 


//pintar baraja
console.log(baraja[0].palo);
console.log(baraja[0].numero);
console.log(baraja[0].valor);
//pintamos la baraja
for(var i= 0; i<baraja.length; i++){
    document.write(baraja[i].palo);
    document.write('<br>');
    document.write(baraja[i].numero);
    document.write('<br>');
    document.write(baraja[i].valor);
    document.write('<br>');

}
//elegimos una carta al azar
function numeroAzarEntero(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


    var azar = numeroAzarEntero(0,52);
    document.write(baraja[azar].palo);
    document.write('<br>');
    document.write(baraja[azar].numero);
    document.write('<br>');
    document.write(baraja[azar].valor);
    document.write('<br>');

//juego de cartas la carta mas alta
//el ordenador baraja las cartas
//el jugador 1 elige al azar
//el jugador 2 elige al azar
//gana el que tenga la carta con valor mas alto
//en caso de empate se empata