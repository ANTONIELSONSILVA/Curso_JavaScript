const nome = ['Luiz','Antonio','Viado'];


for(let valor of nome){
    console.log(valor);
}


for(let i in nome){
    console.log(nome[i]);
}

console.log('==============================');

nome.forEach(function(valor, indice, array){

    console.log(valor, indice, array);
    
});

// FOR Clássico = Geralmente com intaráveis (Array ou string)
// FOR in = Retorna o índice ou chave (string, array ou objetos) 
// FOR of = Retorna o valor em si (iteráveis, arrays ou stgrings)