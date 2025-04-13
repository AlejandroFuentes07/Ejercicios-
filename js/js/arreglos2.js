function ingresarNotas() {
    return new Promise(async resolve => {
      const notas = [];
      
      for (let i = 0; i < 4; i++) {
        const nota = await new Promise(res => {
          rl.question(`Ingrese la nota #${i + 1} (0-10): `, respuesta => {
            const num = parseFloat(respuesta);
            res(isNaN(num) || num < 0 || num > 10 ? null : num);
          });
        });
        
        if (nota === null) {
          console.log('Nota inválida. Debe ser entre 0 y 10.');
          i--; // Repetir esta iteración
          continue;
        }
        
        notas.push(nota);
      }
      
      todasNotas.push(notas);
      resolve(notas);
    });
  }