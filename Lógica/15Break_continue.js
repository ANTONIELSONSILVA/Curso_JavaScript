
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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



/*
for (const iterator of object) {
    
}


for (const iterator of object) {
    
}
*/

