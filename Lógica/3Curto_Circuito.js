 /*
 
 && -> false && true -> false "o valor mesmo"
 || ->

 FALSY
 false
 0
 '' "" ``
 null / undefined
 NaN
 
 */

 function falaoi(){
     return 'Oi';
 }

//let vaiExecutar = undefined; // ou sem nada
let vaiExecutar = 'cu';
console.log(vaiExecutar && falaoi());



// retorna o primeiro valor verdadeiro
console.log(0 || false || null || 'Rego' || true); 




//const corUsuario = null;
const corUsuario = 'Vermelho';
const corPadrão = corUsuario || 'Preto';
console.log(corPadrão);



const a = 0;
const b = null;
const c = false;
const d = NaN;

console.log(a || b || c || d); // tudo falso retorna o último

