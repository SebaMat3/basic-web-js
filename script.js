
const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculation1');
const input2 = document.querySelector('#calculation2');
const btnCal = document.querySelector('#btnCal');
const pResult = document.querySelector('#result')

function onClickBtn(){
	let total = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML= "The result is: " + total;
    pResult.classList.add('show-p');
    pResult.classList.remove('hide-p');
}