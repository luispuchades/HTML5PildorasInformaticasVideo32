/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS VII
 * Origin: Video32.html ==> Insertar Texto
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    var lienzo,
        dimensiones,
        texto,
        alturaTexto,
        alturaTextoPx;

    texto = "Hola alumnos";
    alturaTexto = 48;
    alturaTextoPx = alturaTexto + "px";

    //INSERCION DE TEXTO
    //1. Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');
    // AGREGAMOS UNA SOMBRA
    // Definimos el color de la sombra
    lienzo.shadowColor="rgba(0,0,0,0.5)";
    //Definimos el desplazamiento horizontal de la sombra
    lienzo.shadowOffsetX = 4;
    //Definimos el deplazamiento vertical de la sombra
    lienzo.shadowOffsetY = 4;
    //Difuminamos la sombra
    lienzo.shadowBlur = 4;
    //2.Definimos el tipo de letra
    lienzo.font = "bold" + " " + alturaTextoPx + " " + "verdana";
    //3. Indicamos que las coordenadas serán las de inicio del texto
    // Si queremos decir que las corrdenadas serán las de finalización
    // usaríamos lienzo.textAlign = "end";
    lienzo.textAlign = "start";
    //4. Indicamos la alineación vertical
    // Valores "top", "bottom",
    lienzo.textBaseline = "top";
    //5.Indicamos el texto y la posición horizontal de inicio "start" o de fin "end"
    lienzo.fillText(texto, 100, 100);
    // Dibujamos una línea para comprobar la posición
    dimensiones = lienzo.measureText(texto);
    // Dibujamos un rectángulo externo
    //lienzo.strokeRect(100,100, dimensiones.width+10, alturaTexto+10);



    /**
    .*.lienzo.moveTo(100,100);
    .*.lienzo.lineTo(200,100);
    .*.lienzo.stroke();
     */

}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded',cargarDocumento,false);
