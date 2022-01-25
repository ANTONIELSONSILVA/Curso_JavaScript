const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let letra of letras){

    if(letra === 2){
        continue;
    }

    console.log(letra);
    
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    // Pula o 2
    if(numero === 2){
        continue;
    }
    // Pula o 5
    if(numero === 5){
        continue;
    }

    console.log(numero);
    
}