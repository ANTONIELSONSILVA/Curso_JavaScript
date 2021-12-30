//array

const pessoal1 = [];


// objeto

const pesssoa2 = {

    nome : 'Luiz',
    sobrenome: 'miranda',
    idade : 25,

    // metodo

    fala(){
        console.log('Vai tomar no cu');
        console.log(`${this.nome} ${this.sobrenome} vai tomar no cu`);
    },

    incrementarIdade(){
        this.idade++;
    }


};

console.log(pessoal1.nome);

// ============================
// com função

function criaPessoa(nome, sobrenome, idade){
  
    return{
        nome : nome,          // ou só nome
        sobrenome : sobrenome,
        idade : idade
    };



};


const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('cu', 'merda', 69);

pessoa2.fala();

console.log(pessoal1.nome, pessoal2.nome);
