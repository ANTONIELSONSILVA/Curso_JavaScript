const pessoa = {
//    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via Desestruturação

const { nome = 'Antonio', sobrenome, idade} = pessoa;
console.log(nome, sobrenome);

//      rua vira variavel r,   receberia 123456 se rua não existisse         
const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(r, numero, endereco)

//const {nome, ...resto} = pessoa;
const { ...resto} = pessoa;
console.log(resto);

              //  var
// const { nome: teste = 'Antonio', sobrenome, idade} = pessoa;
// console.log(teste, sobrenome);


//const nome = pessoa.nome;

//console.log(nome);
//console.log('');
//console.log(pessoa);