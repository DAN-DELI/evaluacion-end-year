# Evaluación Final – JavaScript

Este repositorio contiene los ejercicios desarrollados para la evaluación de final de año.

---

## Estructura del proyecto

evaluacion-fin-de-año.js  
├── ejercicio1  
├── ejercicio2  
├── ejercicio3  
└── README.md

---

## Ejercicio 1 – Sistema de Gestión y Validación de Solicitudes de Soporte Técnico

Este ejercicio simula un sistema que recibe múltiples solicitudes de soporte técnico
desde consola, las valida, clasifica y procesa, asegurando que el programa:

- No se bloquee ante errores
- Informe claramente qué ocurrió y por qué
- Maneje datos incorrectos de forma controlada

### Funcionalidades principales

- Recolección de solicitudes mediante entrada por consola
- Validación de datos (tipo, prioridad, descripción, etc.)
- Separación de solicitudes válidas e inválidas sin modificar el arreglo original
- Clasificación de solicitudes válidas por prioridad:
  - Alta (4 – 5)
  - Media (2 – 3)
  - Baja (1)
- Procesamiento asíncrono utilizando:
  - Callbacks
  - Promesas
  - Async / Await
- Manejo de errores con `try / catch`
- Resumen final mostrado en consola con resultados claros

### Justificación técnica

- Se utiliza **inmutabilidad** para evitar modificar el arreglo original de solicitudes.
- El código está **modularizado** en funciones para facilitar mantenimiento y lectura.
- Se emplean diferentes mecanismos asíncronos para demostrar comprensión del flujo
  no bloqueante en JavaScript.
- El manejo de errores evita que el programa se detenga de forma abrupta.

---

## Ejercicio 2
Sistema de gestión de transacciones que incluye:
- Registro y validación de datos por consola
- Uso de promesas para simular carga asíncrona
- Consumo con `async / await`
- Clasificación de transacciones
- Cálculo de estadísticas usando callbacks

---

## Ejercicio 3
Ejercicio enfocado en reforzar el uso de funciones, modularización y lógica en JavaScript.

---

## Tecnologías utilizadas

- JavaScript
- Node.js
- prompt-sync

---

## Ejecución

Ingresar desde la terminal a la carpeta del ejercicio deseado y al al archivo en si.  
El siguiente es un ejemplo, donde "X" representa el numero del ejercicio:

```bash
node ejercicioX/ejercicioX.js