function saudacao(){                // saudacao(nome)
    console.log(`Cu rachado`);      // (`${nome} Cu rachado`);
}

saudacao();                         //  saudacao('Viado');

// ===============

function saudacao(nome){
    console.log(`${nome} Cu rachado`);
    return 123456
    // return  `${nome} Cu rachado`;  
}


const variavel = saudacao('Viado');
console.log(variavel);

// =======================

function soma(x, y){
    const resultado = x + y;
    return resultado;
    // resultado só vale dentro da função
}


console.log(soma(2, 2));

// ==================

function soma(x, y){
    const resultado = x + y;
    return resultado;
    // resultado só vale dentro da função
}


console.log(soma('CU', 'Largo'));


// =================

