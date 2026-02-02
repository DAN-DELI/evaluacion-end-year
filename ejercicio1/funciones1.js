//================================================================================
//    ============================ FUNCIONES #1 ============================
//================================================================================

import promptSync from "prompt-sync";
const prompt = promptSync();

//==============================
// FUNCION #1 - RECOLECTA LAS SOLICITUDES
//==============================
// Funcion para solicitar y guardar los datos de todas las solicitudes.

// Array vacio donde entraran todas las solicitudes
let arraySolicitudBase = []
function solicitudBase() {

    console.log("\nBienvenido al servicio de soporte tecnico. Indica los siguientes datos para para ayudarte en tu solicitud:")


    while (true) {
        let id, usuario, tipo, prioridad, descripcion;
        //  Declaramos las variables


        //===========================
        // SOLICITAMOS DATOS
        //===========================

        try {
            // Solicitamos "id"
            id = prompt("Ingrese el id de la solicitud: ").trim();

            // Solicitamos "usuario"
            usuario = prompt("Indica tu nombre: ").trim();

            // Solicitamos "tipo"
            tipo = prompt("Ingrese el tipo de solicitud (hardware | software | red): ").trim();

            // Solicitamos "prioridad";
            prioridad = parseInt(prompt("Ingrese el numero de prioridad (Numero entero entre el 1 y 5): ").trim());

            // Solicitamos "descripcion"
            descripcion = prompt("Indicanos el problema (Minimo 10 caracteres): ").trim();
        } catch (error) {
            console.log("Error al solicitar los datos: " + error.message);
        }

        //===========================
        // GUARDAMOS EN EL ARRAY
        //===========================

        arraySolicitudBase.push({
            id: id,
            usuario: usuario,
            tipo: tipo,
            prioridad: prioridad,
            descripcion: descripcion
        })

        //===========================
        // CONSULTAR OTRO REGISTRO
        //===========================
        // Declaramos variable donde ira la respuesta si desea registrar otro
        let nuevaSolicitud;

        while (true) {
            nuevaSolicitud = prompt("¿Tiene otra solicitud de soporte? (Si / No) ").toLowerCase().trim();

            if (nuevaSolicitud !== "si" && nuevaSolicitud !== "no") {
                console.log("No ha ingresado una opcion valida. Selecciona de nuevo: ")
                continue;
            } else {
                break;
            }
        }
        if (nuevaSolicitud == "no") {
            break;
        }
    }

    // Retornamos el array base completo
    return arraySolicitudBase
}



//==============================
// FUNCION #2 - FILTRAMOS EN VALIDAS E INVALIDAS
//==============================
function validarDatos(arrayBase) {

    let solicitudesValidas = [];
    let solicitudesInvalidas = [];

    for (let solicitud of arrayBase) {

        let errores = [];

        // Validar ID
        if (typeof solicitud.id !== "string" || isNaN(solicitud.id) || Number(solicitud.id) <= 0) {
            errores.push("ID inválido");
        }

        // Validar usuario
        if (typeof solicitud.usuario !== "string" || solicitud.usuario.trim() === "" || !/^[a-zA-Z\s]+$/.test(solicitud.usuario)) {
            errores.push("Usuario vacío o no válido");
        }

        // Validar tipo
        if (!["hardware", "software", "red"].includes(solicitud.tipo.toLowerCase())) {
            errores.push("Tipo de solicitud no permitido");
        }

        if (typeof solicitud.prioridad !== "number" || Number.isNaN(solicitud.prioridad) || solicitud.prioridad < 1 || solicitud.prioridad > 5) {
            errores.push("Prioridad fuera del rango permitido (1 a 5)");
        }

        // Validar descripción
        if (typeof solicitud.descripcion !== "string" || solicitud.descripcion.length < 10) {
            errores.push("Descripción demasiado corta (mínimo 10 caracteres)");
        }

        // Resultado final
        if (errores.length === 0) {
            solicitudesValidas.push({ ...solicitud, activo: true });
        } else {
            solicitudesInvalidas.push({
                ...solicitud,
                activo: false,
                motivo_de_rechazo: errores
            });
        }
    }

    // Retorna con las solicitudes validas e invalidas
    return {
        validas: solicitudesValidas,
        invalidas: solicitudesInvalidas
    };
}


//==============================
// FUNCION #3 - CATEGORIZAMOS LAS VALIDAS POR CATEGORIA (ALTA | MEDIA | BAJA)
//==============================
// Clasifica solicitudes válidas por prioridad
function clasificarPorPrioridad(solicitudesValidas) {

    let prioridadAlta = [];
    let prioridadMedia = [];
    let prioridadBaja = [];

    for (let solicitud of solicitudesValidas) {

        if (solicitud.prioridad === 4 || solicitud.prioridad === 5) {
            prioridadAlta.push(solicitud);

        } else if (solicitud.prioridad === 2 || solicitud.prioridad === 3) {
            prioridadMedia.push(solicitud);

        } else if (solicitud.prioridad === 1) {
            prioridadBaja.push(solicitud);
        }
    }

    return {
        alta: prioridadAlta,
        media: prioridadMedia,
        baja: prioridadBaja
    };
}


//=====================================
// CALLBACK
//=====================================
function procesarConCallback(solicitud, callback) {
    setTimeout(() => {
        if (!solicitud) {
            callback(null);
        } else {
            callback(null, {
                id: solicitud.id,
                tipo: solicitud.tipo,
                estado: "Procesada con callback",
                prioridad: solicitud.prioridad
            });
        }
    }, 1000);
}

//=====================================
// PROMESA
//=====================================
function procesarConPromesa(solicitud) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!solicitud) {
                reject(null);
            } else {
                resolve({
                    id: solicitud.id,
                    tipo: solicitud.tipo,
                    estado: "Procesada con promesa",
                    prioridad: solicitud.prioridad
                });
            }
        }, 1500);
    });
}

//=====================================
// ASYNC / AWAIT
//=====================================
async function procesarConAsyncAwait(solicitud) {
    if (!solicitud) {
        throw new Error(null);
    }

    return {
        id: solicitud.id,
        tipo: solicitud.tipo,
        estado: "Procesada con async/await",
        prioridad: solicitud.prioridad
    };
}





//==============================
// FUNCION #7 - MOSTRAR RESULTADOS FINALES
//==============================
function mostrarResumen(arrayBase, filtrado, prioridad) {

    console.log("\n================= RESUMEN GENERAL =================");

    console.log(`\nTotal de solicitudes ingresadas: ${arrayBase.length}`);
    console.log(`Solicitudes válidas: ${filtrado.validas.length}`);
    console.log(`Solicitudes inválidas: ${filtrado.invalidas.length}`);

    console.log("\n----- Clasificación por prioridad -----");
    console.log(`Alta prioridad: ${prioridad.alta.length}`);
    console.log(`Media prioridad: ${prioridad.media.length}`);
    console.log(`Baja prioridad: ${prioridad.baja.length}`);

    if (filtrado.invalidas.length > 0) {
        console.log("\n----- SOLICITUDES INVÁLIDAS -----");
        filtrado.invalidas.forEach((solicitud, index) => {
            console.log(`\nSolicitud #${index + 1}`);
            console.log(`ID: ${solicitud.id}`);
            console.log("Motivos:");
            solicitud.motivo_de_rechazo.forEach(motivo => {
                console.log(`- ${motivo}`);
            });
        });
    }

    console.log("\n===============================================");
}













//===========================
// EXPORTAR FUNCIONES
//===========================
export {
    solicitudBase,
    validarDatos,
    clasificarPorPrioridad,
    procesarConCallback,
    procesarConPromesa,
    procesarConAsyncAwait,
    mostrarResumen
};