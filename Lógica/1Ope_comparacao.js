/*
>
>=
<
<=
== igualdade (valor)  ----------------> não recomendado
=== igualdade estrita (valor e tipo)
!= diferente (valor)   ----------------> não recomendado
!== diferente estrito (valor e tipo)

*/

// Exemplo de ERRO usando ==
const num1 = 10;
const num2 = '10';

const comp = num1 == num2;
console.log(comp);

// Ex 2

const num3 = 10;
const num4 = '10';

const comp2 = num1 === num2;
console.log(comp2);

// =========================