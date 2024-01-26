let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosGanadores = [];
let limite = 10;

function asignarTextoElemento(elemento,texto){
    
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}


function verificarUsuario () {
    
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroUsuario===numeroSecreto){
    asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
    
    document.getElementById("reiniciar").removeAttribute("disabled");

} else {
       if(numeroUsuario>numeroSecreto) {
        asignarTextoElemento("p","El número secreto es menor");
    } else {
        asignarTextoElemento("p","El número secreto es mayor");
        } 
    }

    intentos++;
    
    limpiarCaja ();
    return;
}

function limpiarCaja (){
    
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*limite)+1;
  
  console.log(numeroGenerado);
  console.log(listaDeNumerosGanadores);

  if(listaDeNumerosGanadores.length==limite){
    asignarTextoElemento("p","Ya se terminaron las posibilidades");

    }else {

        if (listaDeNumerosGanadores.includes(numeroGenerado)){
            return generarNumeroSecreto();
    
        } else {
          listaDeNumerosGanadores.push(numeroGenerado);
            return numeroGenerado;
        }
     }
}

function condicionesIniciales(){
    
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p",`Inserta un número entre 1 y ${limite}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    

}

function reiniciarJuego(){

    limpiarCaja ();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}


condicionesIniciales();