const data = new Date('2022-01-8 00:00:00');
const diaSemana = data.getDay();
console.log(diaSemana);


function imprimeDiaSemana(diaSemana) {

    let mensagem;

    switch (diaSemana) {
        case 0:
            mensagem = 'Domingo';
            break;
        case 1:
            mensagem = 'Segunda';
            break;
        case 2:
            mensagem = 'Terça';
            break;
        case 3:
            mensagem = 'Quarta';
            break;
        case 4:
            mensagem = 'Quinta';
            break;
        case 5:
            mensagem = 'Sexta';
            break;
        case 6:
            mensagem = 'Sabado';
            break;
        default:
            mensagem = 'Fora de Range';
            break;
    }

    return mensagem;

}


console.log(imprimeDiaSemana(diaSemana) + (diaSemana > 0 && diaSemana < 5 ? '-Feira' : '' ));


// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// console.log(nivelUsuario);        //  se      então          se não
