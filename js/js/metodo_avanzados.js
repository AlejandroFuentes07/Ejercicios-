1. function calcularPreciosConIVA(preciosSinIVA) {
    return preciosSinIVA.map(precio => parseFloat((precio * 1.21).toFixed(2)));
}
// Error corregido: Se eliminó un paréntesis de cierre extra

2. function estudiantesAprobados(estudiantes) {
    return estudiantes.filter(estudiante => estudiante.nota >= 60);
}

// Ejemplo de uso:
const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 45 },
    { nombre: "Carla", nota: 70 }
];
console.log(estudiantesAprobados(estudiantes));
// [{ nombre: "Ana", nota: 85 }, { nombre: "Carla", nota: 70 }]

3. function contarAprobados(estudiantes) {
    return estudiantes.reduce((total, estudiante) => 
        estudiante.nota >= 60 ? total + 1 : total, 0);
}

console.log(contarAprobados(estudiantes)); // 2

4.
function unirPalabras(palabras) {
    return palabras.reduce((frase, palabra) => `${frase} ${palabra}`);
}

console.log(unirPalabras(["Hola", "mundo", "esto", "es", "JS"]));
// "Hola mundo esto es JS"

5. function ordenarPorPrecio(productos) {
    return [...productos].sort((a, b) => a.precio - b.precio);
}

const productos = [
    { nombre: "Mouse", precio: 20 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Teclado", precio: 50 }
];
console.log(ordenarPorPrecio(productos));
// Ordenado de menor a mayor precio

6. let catalogo = [];

function agregarProducto(nombre, precio) {
    catalogo.push({ nombre, precio });
    return catalogo;
}

console.log(agregarProducto("Laptop", 800));

7. let tareas = ["Comprar víveres", "Lavar el auto"];

function priorizarTarea(tarea) {
    tareas.unshift(tarea);
    return tareas;
}

console.log(priorizarTarea("Reunión importante"));

8. let colaClientes = ["Cliente1", "Cliente2", "Cliente3"];

function removerUltimoCliente() {
    const removido = colaClientes.pop();
    console.log("Cliente removido:", removido);
    return colaClientes;
}

console.log(removerUltimoCliente());

9. let listaReproduccion = ["Canción1", "Canción2", "Canción3"];

function empezarConCancionDestacada() {
    const removida = listaReproduccion.shift();
    console.log("Canción removida:", removida);
    return listaReproduccion;
}

console.log(empezarConCancionDestacada());

10. function convertirRespuestaEnArreglo(respuesta) {
    return Array.from(respuesta.toLowerCase());
}

console.log(convertirRespuestaEnArreglo("JavaScript"));
// ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

11. function combinarListasDeCompra(lista1, lista2) {
    return lista1.concat(lista2);
}

console.log(combinarListasDeCompra(["Pan", "Leche"], ["Huevos", "Queso"]));

12. function recortarImagen(matriz, x1, y1, x2, y2) {
    return matriz.slice(y1, y2 + 1).map(fila => fila.slice(x1, x2 + 1));
}

const imagen = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(recortarImagen(imagen, 1, 1, 2, 2));
// [[6, 7], [10, 11]]

13. function ubicacionDelPaquete(recorrido, ubicacion) {
    return recorrido.indexOf(ubicacion);
}

const recorrido = ["Almacén", "Centro", "Norte", "Destino"];
console.log(ubicacionDelPaquete(recorrido, "Norte")); // 2

14. function ubicacionDelPaquete(recorrido, ubicacion) {
    return recorrido.indexOf(ubicacion);
}

const recorrido = ["Almacén", "Centro", "Norte", "Destino"];
console.log(ubicacionDelPaquete(recorrido, "Norte")); // 2

15. function verificarTesoro(areas, tesoro) {
    return areas.includes(tesoro);
}

console.log(verificarTesoro(["Playa", "Montaña", "Bosque"], "Montaña")); // true

16. function verificarDescuento(cursos) {
    return cursos.some(curso => curso.descuento);
}

const cursos = [
    { nombre: "JS", descuento: false },
    { nombre: "React", descuento: true }
];
console.log(verificarDescuento(cursos)); // true

17. function enviarCorreoConfirmacion(asistentes) {
    asistentes.forEach(asistente => {
        console.log(`Correo enviado a: ${asistente.nombre} (${asistente.email})`);
    });
}

const asistentes = [
    { nombre: "Ana", email: "ana@example.com" },
    { nombre: "Luis", email: "luis@example.com" }
];
enviarCorreoConfirmacion(asistentes);

