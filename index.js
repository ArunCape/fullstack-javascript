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

var spanX = document.getElementById('x')
var spanY = document.getElementById('y')

document.addEventListener('mousemove', (e) => {
    spanX.innerText = 'Co-ordinate of X : ' + e.x ;
    spanY.innerText = ', Y : ' + e.y
})
