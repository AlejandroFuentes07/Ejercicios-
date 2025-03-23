Ejercicio 1: Eliminar duplicados

```javascript
let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];
let nombresUnicos = [...new Set(nombres)];

console.log(nombresUnicos); // ["Ana", "Luis", "Pedro", "Juan"]
```