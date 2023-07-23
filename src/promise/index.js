// Una promesa es algo que va a pasar, ¿cuándo? Puede ser inmediatamante, en un rato o nunca (rechazada).
// La promesa tiene 3 estados:
// Pendiente: cuando se está ejecutando
// Cumplida: cuando se obtienen los valores deseados
// Rechazada: cuando la operación falló

// then sirve para concatenar otras solicitudes
// catch para el reject
// finally es cuando ya terminó, sin importar si es then o catch

// hazAlgo()
// .then(resultado => hazAlgoMas(resultado))
// .then(nuevoResultado => hazLaTerceraCosa(nuevoResultado))
// .then(resultadoFinal => {
//   console.log(`Obtenido el resultado final: ${resultadoFinal}`);
// })
// .catch(falloCallback);

const promise = new Promise(function (resolve, reject) {
    // Aquí va lo que requiera nuestro código
    resolve('Todo correcto')
});


const cows = 11;

const countCows = new Promise( function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
})

// countCows.then((result) => console.log(result))


// countCows.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('Finally')
// });