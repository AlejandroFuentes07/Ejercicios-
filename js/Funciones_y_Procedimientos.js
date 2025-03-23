function palabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

// Ejemplo  uso:
console.log(palabraMasLarga("LA PROGRAMACIÓN ES MUY INTERESANTE")); // "PROGRAMACIÓN"