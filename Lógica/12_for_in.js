const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade:30
};



for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


// =======================================================


for (let i in pessoa){
    console.log(i);
    console.log(pessoa.nome);
}


const frutas = ['Pera','Maçã','Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}


for(let i in frutas){
    console.log(i);
}

 