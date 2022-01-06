const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

console.log(elementos.length)

function criaElemento(elemento) {
    const E = document.createElement(elemento);
    return E;
}



function display(elementos) {

    const display = document.querySelector('#display');
    
    for(i = 0; i < elementos.length; i++){

        criaElemento()

    }

}