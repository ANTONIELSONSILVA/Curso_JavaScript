// ?:

const pontuacaoUsuario = 1000;

 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
 console.log(nivelUsuario);        //  se      então          se não



const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);