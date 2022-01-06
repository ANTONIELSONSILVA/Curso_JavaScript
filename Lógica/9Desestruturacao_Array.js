//let a = 'A';
//let b = 'B';
//let c = 'C';

//[a,b,c] = [1, 2, 3];

//const numeros = [1, 2, 3];
//[a, b, c] = numeros;

//console.log(a, b, c);

// ======================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ... resto] = numeros;
console.log(primeiroNumero, segundoNumero, resto);


const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const[um,  , tres,  , cinco,  , sete] = letras;
console.log(um, tres, cinco);




// Atribuição via Desestruturação
//                     0          1          2
//                  0  1  2    0  1  2    0  1  2  
const elementos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [elementos1, elementos2, elementos3] = elementos;
console.log(elementos[1]);