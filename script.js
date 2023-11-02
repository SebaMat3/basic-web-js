
const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculation1');
const input2 = document.querySelector('#calculation2');
const btnCal = document.querySelector('#btnCal');
const pResult = document.querySelector('#result')

function onClickBtn(){
	let total = Number(input1.value) + parseInt(input2.value);
    
    // there's even a simpler way to transform to numbers, and that is by placing a + before the object call
    console.log(+input1.value + +input2.value);

    pResult.innerHTML= "The result is: " + total;
    pResult.classList.add('show-p');
    pResult.classList.remove('hide-p');
}