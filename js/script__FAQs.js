"use strict";
/* codigo para la lista de preguntas frecuentes */
let mostrar = document.getElementsByClassName("pregunta");
let i;

for (i = 0; i < mostrar.length; i++) {
  mostrar[i].addEventListener("click", function() {
/* agraega y quita la clase activo */
    this.classList.toggle("activo");

/* muestra y oculta el panel de respuesta*/
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 