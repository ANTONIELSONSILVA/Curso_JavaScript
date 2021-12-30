/*
    Primitivos - String, number, boolean, undefined, null (bigint, symbol)

    Referência (mutável) - array, object, function - Passados por referência

*/


let nome = 'Luiz';
nome[0] = 'R';               // não funciona
console.log(nome[0], nome);

// Primitivo

let a = 'A';
let b = a;        // Cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);   // somente a foi alterado 



// Referência

let a = [1, 2, 3];  
let b = a;
console.log(a, b);

a.push(4);          
console.log(a, b);  // alterando b, a também é alterado 
b.pop();
console.log(a, b);


let a = [1, 2, 3]; 
let b = [...a];          // b é independente de a e com o conteúdo de a
let c = b;               // c e b tem a mesma referência



const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = a;               // ou b = {...a}; para b independente
a.nome = 'Paulo';
console.log(b);
