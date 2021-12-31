const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getImc(peso, altura);
    console.log(imc);

});


function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1',
                   'Obesidade grau 2','Obesidade grau 3'];





                }



function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2);
};



function criaP(){
    const p = document.createElement('p');
    return p;

}


 function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    resultado.appendChild(p);   

 };