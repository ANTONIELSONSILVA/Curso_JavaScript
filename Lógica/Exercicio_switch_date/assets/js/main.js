

const data = new Date();
display();




function geraDiaSemana(dia){

const semana = ['Domingo', 'Secunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

return (semana[dia] + (dia > 0 && dia < 5 ? '-Feira' : ''));


};


function geraMes(mes){

	const mesNomes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto',
					  'Setembro','Outubro','Novembro','Dezembro'];

	return(mesNomes[mes]);

}



function criaP(){
	const p = document.createElement('p');
	return p;
}


function display(){

	const display = document.querySelector('#display');
	display.innerHTML = '';

	const msg = geraDiaSemana(data.getDay()) + ', ' + data.getDate() + ' de ' 
	+ geraMes(data.getMonth()) + ' de ' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes();

	const p = criaP();

	p.innerHTML = msg;

	display.appendChild(p);



}