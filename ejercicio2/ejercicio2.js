//================================================================================
//    ============================ EJERCICIO #2 ============================
//================================================================================

import promptSync from "prompt-sync";
const prompt = promptSync();

// Importamos las funciones
import {
    clasificarTrans,
    datosEntrada,
    cargarTransacciones,
    procesarEstadistica
} from './funciones2.js';

//================================================================================
// PROGRAMA PRINCIPAL (ASYNC)
//================================================================================
async function main() {
    try {
        // 1. Entrada de datos
        let arrayBase = datosEntrada();

        // 2. Carga asíncrona simulada
        let transacciones = await cargarTransacciones(arrayBase);

        // 3. Clasificación
        let arrayFiltradas = clasificarTrans(transacciones);

        //========================
        // CALCULOS CON CALLBACKS
        //========================

        // Total de transacciones procesadas
        let totalProcesadas = procesarEstadistica(
            transacciones,
            datos => datos.length
        );

        // Total válidas
        let totalValidas = procesarEstadistica(
            arrayFiltradas.movimientosAceptados,
            datos => datos.length
        );

        // Total rechazadas
        let totalRechazadas = procesarEstadistica(
            arrayFiltradas.movimientosDenegados,
            datos => datos.length
        );

        // Total por tipo de operación
        let totalesPorTipo = procesarEstadistica(
            transacciones,
            datos => {
                let resumen = {
                    deposito: 0,
                    retiro: 0,
                    transferencia: 0
                };

                for (let mov of datos) {
                    let tipo = mov.tipo.toLowerCase().trim();
                    if (resumen[tipo] !== undefined) {
                        resumen[tipo] += Number(mov.monto);
                    }
                }

                return resumen;
            }
        );

        //========================
        // SALIDA
        //========================
        console.log("\n====== RESUMEN ======")
        console.log("\n--- ESTADISTICAS ---");
        console.log("Total procesadas:", totalProcesadas);
        console.log("Total válidas:", totalValidas);
        console.log("Total rechazadas:", totalRechazadas);

        console.log("\n--- TOTAL POR TIPO ---");
        console.log("Depósitos:", totalesPorTipo.deposito);
        console.log("Retiros:", totalesPorTipo.retiro);
        console.log("Transferencias:", totalesPorTipo.transferencia);

    } catch (error) {
        console.log("Error:", error);
    }
}

// Ejecutar programa
main();
