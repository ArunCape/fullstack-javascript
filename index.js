var buttonElement = document.getElementById('button')
var counter = 0;

var spanElement = document.getElementById('count')
spanElement.innerText += counter

buttonElement.addEventListener('click', () => {
    counter += 1;
    spanElement.innerText ='Number of times button clicked: ' + counter
});


var greetElement = document.getElementById('greet')
setTimeout(() => {greetElement.innerText = 'Click the button'}, 5000)

