var button = document.getElementById('button')

button.addEventListener('click', () => {
    location.reload()
});

var boxes = document.getElementsByClassName('box');
var counter = 0;

var colors = createColorsArray();
console.log(colors);

for(let box of boxes){
    console.log(box)
    let bgcolor = colors[counter];
    box.id = counter++;
    box.style.backgroundColor = bgcolor
    box.addEventListener('click', ()=> {
        var style = getComputedStyle(box);
        console.log(bgcolor)
        console.log(box.id, style.backgroundColor)
    })
}

function createColorsArray() {
    let colors = []
    for(let i = 0; i<6 ; i++) {
        let rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        colors.push(rgb);
    }
    return colors;
}