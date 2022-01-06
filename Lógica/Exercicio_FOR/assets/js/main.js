const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];


function criaElemento(elemento) {
    const E = document.createElement(elemento);
    return E;
}

display(elementos);



function display(elementos) {

    const display = document.querySelector('#container');

    const elem = elementos[0].tag;
    const msg = elementos[0].texto;
    const e;
    console.log(elem);
    console.log(msg);


    e = criaElemento(elem);

    e.innerHTML = msg;
    display.appendChild(e);

}

