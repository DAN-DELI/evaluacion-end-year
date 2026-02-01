//================================================================================
//    ============================ EJERCICIO #2 ============================
//================================================================================

import promptSync from "prompt-sync";
const prompt = promptSync();

// Importamos las funciones
import { clasificarTrans, datosEntrada, cargarTransacciones } from './funciones2.js';

//================================================================================
// PROGRAMA PRINCIPAL (ASYNC)
//================================================================================
async function main() {
    try {
        //========================================================
        // 1. SOLICITAMOS LOS DATOS Y LOS SUMAMOS AL ARRAY PRINCIPAL
        //========================================================
        let arrayBase = datosEntrada();

        //========================================================
        // 2. CARGA ASÍNCRONA DE LAS TRANSACCIONES
        //========================================================
        let transacciones = await cargarTransacciones(arrayBase);

        //========================================================
        // 3. FILTRAR Y CLASIFICAR LOS DATOS OBTENIDOS
        //========================================================
        let arrayFiltradas = clasificarTrans(transacciones);


    } catch (error) {
        console.log("Error:", error);
    }
}

// Ejecutamos el programa
main();












// // Muestra los resultados
// console.log("\n--- TRANSACCIONES ACEPTADAS ---");
// console.log(arrayFiltradas.movimientosAceptados);

// console.log("\n--- TRANSACCIONES DENEGADAS ---");
// console.log(arrayFiltradas.movimientosDenegados);