const nome = 'Luiz Otávio';
console.log(nome[0]);

const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
console.log(alunos);

alunos[0] = 'Eduardo';
cosole.log(alunos[0]);


const alunos2 = ['Luiz', 'Maria', 'João'];
alunos2[3] = 'Marcos';   // aumenta o indice 
cosole.log(alunos2.length);

alunos2[alunos2.length] = 'cu';   // aumentou 1

// ou

alunos2.push('Rola');   // coloca no final
alunos2.unshift('buseta');   // coloca no final
console.log(alunos2);


alunos2.pop(); // remove do final
// ou
const arquivo = alunos.pop();  
console.log(arquivo);
const arquivo = alunos.shift();  // remove do fim
console.log(arquivo);

console.log(alunos2);

console.log(typeof alunos2);
console.log(alunos2 instanceof Array);