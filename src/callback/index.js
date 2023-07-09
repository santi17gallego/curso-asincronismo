// Un Callback es una una función que se pasa como argumento de otra función y que será invocada.

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

// No hay que agregar los paréntesis a sum porque si lo hacemos la estaríamos invocando inmediatamente
console.log(calc(1, 2, sum));


// Al pasar dos segundos de la ejecución de este código ejecutará esa función
setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

// Al final van los argumentos que recibe la función
setTimeout(gretting, 3000, 'slg');