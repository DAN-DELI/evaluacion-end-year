# Evaluación Final De Año – JavaScript

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

## Ejercicio 2 – Sistema de Gestión de Transacciones

Este ejercicio simula un sistema de gestión de transacciones financieras que recibe datos por consola, los valida, los procesa de forma asíncrona y genera estadísticas, asegurando que el programa:

- No se bloquee ante errores  
- Maneje correctamente procesos asíncronos  
- Clasifique y procese los datos de forma clara  
- Muestre resultados comprensibles en consola  

---

### Funcionalidades principales

- Registro de transacciones mediante entrada por consola  
- Validación de datos ingresados (ID, cliente, tipo, monto, autorización)  
- Almacenamiento de transacciones en un arreglo estructurado  
- Simulación de carga asíncrona de datos utilizando **promesas**  
- Consumo de la promesa mediante **async / await**  
- Clasificación de transacciones en:
  - Aceptadas  
  - Denegadas  
- Cálculo de estadísticas usando **callbacks**:
  - Total de transacciones procesadas  
  - Total de transacciones válidas  
  - Total de transacciones rechazadas  
  - Total de dinero por tipo de operación:
    - Depósitos  
    - Retiros  
    - Transferencias  
- Presentación de un resumen final en consola  

---

### Justificación técnica

- El código está modularizado para separar responsabilidades y facilitar su comprensión.
- Se utilizan **promesas** para simular procesos asíncronos sin bloquear la ejecución.
- El uso de **async / await** permite un manejo más claro del flujo asíncrono.
- Los **callbacks** se emplean para procesar estadísticas de forma flexible.
- Las validaciones evitan errores en tiempo de ejecución.
- El manejo de errores garantiza que el programa continúe funcionando ante fallos.


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