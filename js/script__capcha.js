"use strict";
/* codigo para el capcha */
/* estado inicial de los numeros del capcha */
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
/* estado inicial de confirmar y capcha */
let confirmar = 0;
let capcha= false;

/* inicialisa la funcion para los numeros al azar del capcha */

capcha__numero();

/*inicialisa la funcion capcha__ver el cual muestra los numeros en pantalla*/

let btn__numeros= document.getElementById("numeros");
btn__numeros.addEventListener("click", capcha__ver);

/* inicialisa la funcion capcha__comparar */

let btn__comprobar= document.getElementById("comprobar");
btn__comprobar.addEventListener("click", capcha__comparar);

 /* inicialisa la funcion reiniciar */

let btn=document.getElementById("reinicio");
btn.addEventListener("click", reiniciar);

/* genera 4 numeros al azar */
function capcha__numero() {
    
    numero1 = Math.floor((Math.random() * 9) + 1);
    numero2 = Math.floor((Math.random() * 9) + 1);
    numero3 = Math.floor((Math.random() * 9) + 1);
    numero4 = Math.floor((Math.random() * 9) + 1);
    confirmar = ""+ numero1 + numero2 + numero3 + numero4 ;
}
/* muestra los numeros en la pagina */
function capcha__ver(){
    document.querySelector("#capchas").innerHTML= "" + numero1 + numero2 + numero3 + numero4 ;
}
/* compara si los datos introducidos por el usuario son correctos o no  */
function capcha__comparar(){
     let nodoInput= document.getElementById("input__usuario");
     let numero_ingresado=nodoInput.value;
     if(numero_ingresado===confirmar){
         capcha=true;
     }else {capcha=false;}
    if (capcha === true) {
        document.querySelector("#confirmacion").innerHTML= "correcto";
    } else{ 
        document.querySelector("#confirmacion").innerHTML= "incorrecto";
    }
}
/* reinicia el capcha en caso de ser necesario */
function reiniciar(){
    capcha__numero();
    capcha__ver();
}