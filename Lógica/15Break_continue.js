
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const eu = {
    nome: 'Antonio',
    idade: 27,
    endereco:{
        rua: 'Bonita',
        numero: 69
    }
};


let index = 0;

do{

    for (index; index < numeros.length; index++) {
        if(numeros[index] === 6){
            break;
        }

        console.log("Número: " + numeros[index]);

    }

    index += 1;

}while(index <= 9);



for (let i in eu) {
    
    console.log(eu[i]);

}

