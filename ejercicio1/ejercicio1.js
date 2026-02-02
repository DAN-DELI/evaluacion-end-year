//================================================================================
//    ============================ EJERCICIO #1 ============================
//================================================================================


import promptSync from "prompt-sync";
const prompt = promptSync();

import {
    solicitudBase,
    validarDatos,
    clasificarPorPrioridad,
    procesarConCallback,
    procesarConPromesa,
    procesarConAsyncAwait,
    mostrarResumen
} from "./funciones1.js";

//==============================
// RECOLECTA LAS SOLICITUDES
//==============================
let array1 = solicitudBase();

//==============================
// CREAMOS UN ARRAY INMUTABLE CON LAS SOLICITUDES
//==============================
// CREAMOS UNA COPIA INMUTABLE DEL ARRAY QUE CONTIENE TODAS LAS SOLICITUDES
const copiaArrayCompleto = [...array1]

//==============================
// FILTRAMOS EN VALIDAS E INVALIDAS
//==============================
let filtrado = validarDatos(copiaArrayCompleto)

//==============================
// CATEGORIZAMOS LAS VALIDAS POR CATEGORIA (ALTA | MEDIA | BAJA)
//==============================
let prioridad = clasificarPorPrioridad(filtrado.validas)




//======================
// CALLBACK → prioridad ALTA
//======================
procesarConCallback(prioridad.alta[0], (error, resultado) => {
    if (error) {
        console.log(error);
    } else {
        console.log(resultado);
    }
});


//======================
// PROMESA → prioridad MEDIA
//======================
procesarConPromesa(prioridad.media[0])
    .then(res => console.log(res))
    .catch(err => console.log(err));

//======================
// ASYNC/AWAIT → prioridad BAJA
//======================
try {
    let resultado = await procesarConAsyncAwait(prioridad.baja[0]);
} catch (error) {
    console.log(error.message);
}








// mostrar resumen
mostrarResumen(copiaArrayCompleto, filtrado, prioridad);