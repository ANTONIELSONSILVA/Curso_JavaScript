// Escreva uma função que receba 2 números e retornne o mair deles

function max(p1, p2){
    return p1 > p2 ? p1 : p2;
} 

const max2 = (p1, p2) => {
    return p1 > p2 ? p1 : p2;
};

// ou

const max3 = (p1, p2) => p1 > p2 ? p1 : p2;

console.log(max(2,1));
console.log(max2(10, 20))
console.log(max3(100, 20))

/*

    if(p1 > p2){
        return(p1)
    }else if(p1 < p2){
        return(p2)
    }
        return("São iguais")

*/