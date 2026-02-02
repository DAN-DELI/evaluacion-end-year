//================================================================================
//    ============================ FUNCION #2 ============================
//================================================================================


import promptSync from "prompt-sync";
const prompt = promptSync();


// FUNCIONES EJERCICIO 2


//=================
// ARREGLOS VACIOS
//=================

// 1. Array vacio donde se hubicaran todas las transferencias
let arrayDatosEntrada = []



//================================================================================
// 1. FUNCION PARA SOLICITAR, VALIDAR Y GUARDAR LOS DATOS INICIALES
//================================================================================
function datosEntrada() {

    while (true) {
        // Declaración de variables
        let id, cliente, tipo, monto, autorizacion, autorizado;


        // Solicita y valida el valor "id"
        while (true) {
            let input = prompt("Ingrese su ID: ").trim();

            // Validación: solo dígitos y mayor a 0
            if (!/^\d+$/.test(input) || Number(input) <= 0) {
                console.log("El ID no es válido. Ingrese solo números enteros mayores a 0.");
                continue;
            } else {
                id = Number(input); // Convertimos a número para usarlo luego
                break;
            }
        }

        // Solicita y valida el valor "cliente"
        while (true) {
            cliente = prompt("Ingrese su nombre de cliente: ").trim();

            // Validación: solo letras y espacios
            if (!/^[a-zA-Z\s]+$/.test(cliente)) {
                console.log("El nombre no es válido. Solo se permiten letras y espacios.");
                continue;
            } else {
                break;
            }
        }

        // Solicita y valida el valor "tipo"
        while (true) {
            tipo = prompt("Ingrese el tipo de operacion: (Deposito | Retiro | Transferencia): ");

            if (tipo.toLowerCase().trim() !== "deposito" && tipo.toLowerCase().trim() !== "retiro" && tipo.toLowerCase().trim() !== "transferencia") {
                console.log("No se ha seleccionado un tipo de movimiento correctamente. Ingrese el tipo nuevamente.");
                continue;
            } else {
                break;
            }
        }

        // Solicita y valida el valor "monto"
        while (true) {
            monto = prompt("Ingrese el monto: ");

            if (isNaN(monto) || monto <= 0) {
                console.log("El monto no es valido. Ingrese un valor valido.");
                continue;
            } else {
                break;
            }
        }

        // Solicita y valida el valor "autorizado"
        while (true) {
            autorizacion = prompt("¿Autoriza el movimiento?: (Si | No): ").trim().toLowerCase();

            if (autorizacion !== "si" && autorizacion !== "no") {
                console.log("Ingrese si o no.");
                continue;
            } else if (autorizacion == "si") {
                autorizado = true
                break;
            } else if (autorizacion == "no") {
                autorizado = false
                break;
            }
        }


        //=====================================================
        // AGREGAMOS LOS DATOS RECOLECTADOS AL ARRAY PRINCIPAL
        //=====================================================
        arrayDatosEntrada.push({
            id,
            cliente,
            tipo,
            monto,
            autorizado
        });


        // Pregunta si desea agregar otra transaccion
        let repetir;

        while (true) {
            repetir = prompt("¿Desea agregar otro cliente? (si | no): ").toLowerCase().trim();
            if (repetir !== "si" && repetir !== "no") {
                console.log("Valor no valido, digite de nuevo")
                continue;
            }
            break
        }

        // Si desea continuar, se repite el ciclo
        if (repetir == "si") {
            continue;
        } else {
            break;
        }

    }

    //Retornamos el array de objetos con todas las operaciones
    return arrayDatosEntrada
}



//================================================================================
// 2. FUNCION PARA FINTRAR Y CLASIFICAR LAS TRANSACCIONES 
//================================================================================
function clasificarTrans(arrayDatosEntrada) {

    // Arrays vacios donde se hubicaran las transacciones aceptadas y denegadas
    let movimientosAceptados = []
    let movimientosDenegados = []

    for (let movimiento of arrayDatosEntrada) {
        if (movimiento.autorizado === true) {
            movimientosAceptados.push(movimiento);
        } else {
            movimientosDenegados.push(movimiento);
        }
    }

    // Retornamos los arrays filtrados y clasificados
    return {
        movimientosAceptados,
        movimientosDenegados
    }
}



//================================================================================
// 3. PROMESA PARA SIMULAR CARGA ASINCRONICA DE TRANSACCIONES
//================================================================================
function cargarTransacciones(arrayBase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arrayBase.length > 0) {
                resolve(arrayBase);
            } else {
                reject("No hay transacciones registradas");
            }
        }, 2000);
    });
}



//================================================================================
// 4. FUNCION PARA PROCESAR ESTADISTICAS USANDO CALLBACK
//================================================================================
function procesarEstadistica(datos, callback) {
    return callback(datos);
}










// Exportamos las funciones
export {
    datosEntrada,
    clasificarTrans,
    cargarTransacciones,
    procesarEstadistica
};
