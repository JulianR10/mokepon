
let inputHipodoge = document.getElementById("hipodoge")
let inputCapipepo = document.getElementById("capipepo")
let inputRatigueya = document.getElementById("ratigueya")
let spanMascotaJugador = document.getElementById("mascota-jugador")
let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none';

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego) 
    botonReiniciar.style.display = 'none';
    
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'flex';

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none';

    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.style.display='none';

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge";
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo";
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya";
    }
    else{
        alert('Debe seleccionar a una mascota')
    }

    seleccionarMascotaEnemigo()    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    if(mascotaAleatorio === 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if(mascotaAleatorio === 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else if(mascotaAleatorio === 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorio()
    resultadoCombate()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorio()
    resultadoCombate()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorio()
    resultadoCombate()
}

function ataqueAleatorio(){
    let ataqueAleatorio = aleatorio(1, 3)
    if(ataqueAleatorio === 1){
        ataqueEnemigo = "FUEGO"
    }
    else if(ataqueAleatorio === 2){
        ataqueEnemigo = "AGUA"
    }
    else if(ataqueAleatorio === 3){
        ataqueEnemigo = "TIERRA"
    }
}

function resultadoCombate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" & ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo --;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        
    } else if(ataqueJugador == "AGUA" & ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo --;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        
    } else if(ataqueJugador == "TIERRA" & ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo --;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        
    } else{
        crearMensaje("PERDISTE")
        vidasJugador --;
        spanVidasJugador.innerHTML = vidasJugador;

    }

    revisarVidas()

}

function revisarVidas(){
    if(vidasJugador == 0){
        crearMensajeFinal('Perdiste!!!')
    } else if(vidasEnemigo == 0){
        crearMensajeFinal('Ganaste!!!')
    }

    if (vidasJugador == 0 || vidasEnemigo == 0){
        let botonReiniciar = document.getElementById('boton-reiniciar')
        botonReiniciar.style.display = 'block';
    } 
}

function crearMensaje(resultado){
    let mensajeFinal = document.getElementById("mensajes");
    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Elegiste ${ataqueJugador} y tu enemigo eligió ${ataqueEnemigo}, ${resultado}`
    mensajeFinal.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let mensajeFinal = document.getElementById("mensajes");
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    mensajeFinal.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true;
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true;
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true;
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

iniciarJuego();