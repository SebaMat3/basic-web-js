console.log("Hello, world");

//Access and assign elements by using CSS selectors with .querySelector('selector') 
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');

//You may as well do so by class name and ID 
const fancyp = document.getElementsByClassName('fancyp');
const pid = document.getElementById('pid');



console.log(input.value);

//Print variables as an Object list ({})
console.log({
    h1,
    p,
    fancyp,
    pid,
    input
});

//Accessing elements text only
h1.innerText = "re<br>Create";
//Accessing elements HTML content
h1.innerHTML = "re<br>Create";

//Create elements; create, change and add attributes such as class and src
const img = document.createElement('img');
img.setAttribute('class', 'logo');
img.classList.add('src');
img.setAttribute('src','https://www.pexels.com/es-es/foto/naturaleza-verano-animal-perro-18867498/');
//Get attributes
console.log(img.getAttribute('class'));


pid.innerText = "";
pid.appendChild(img);
console.log(pid);
