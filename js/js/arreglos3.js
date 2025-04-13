function calcularPromedio(notas) {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
  }
  
  // Función principal
  async function main() {
    try {
        const cantidad = parseInt(await new Promise(resolve => {
            rl.question('¿Cuántos estudiantes desea registrar? ', resolve);
        }));
        
        if (isNaN(cantidad) || cantidad <= 0) {
            throw new Error('Debe ingresar un número entero mayor que cero');
        }
        
        // ... resto de tu lógica ...
        
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        rl.close();
    }
}
  
    // Bucle principal
    for (let i = 0; i < cantidad; i++) {
      console.log(`\nRegistro del estudiante #${i + 1}`);
      
      await ingresarNombre();
      const notas = await ingresarNotas();
      const promedio = calcularPromedio(notas);
      promedios.push(promedio);
    }
  
    generarReporte();
    rl.close();
  
  
  // Generar reporte (cumple con console.log)
  function generarReporte() {
    let aprobados = 0;
    let reprobados = 0;
  
    console.log('\n=== REPORTE FINAL ===');
    

    for (let i = 0; i < nombres.length; i++) {
      console.log(`\nEstudiante: ${nombres[i]}`);
      console.log(`Notas: ${todasNotas[i].join(', ')}`);
      console.log(`Promedio: ${promedios[i].toFixed(2)}`);
      
      if (promedios[i] >= 7) {
        console.log('Estado: APROBADO');
        aprobados++;
      } else {
        console.log('Estado: REPROBADO');
        reprobados++;
      }
    }
  
    console.log('\n=== RESUMEN ===');
    console.log(`Total estudiantes: ${nombres.length}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Reprobados: ${reprobados}`);
  }
