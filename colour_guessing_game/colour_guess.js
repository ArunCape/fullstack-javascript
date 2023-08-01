var button = document.getElementById('button')

button.addEventListener('click', () => {
    location.reload()
});



var boxes = document.getElementsByClassName('box');
var counter = 0;

var colors = createColorsArray();
// console.log(colors);

var colorfind = document.getElementById('colorfind');
// colorfind.innerText = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
// var item = items[Math.floor(Math.random()*items.length)];
var coloritems = colors[Math.floor(Math.random() * colors.length)];
colorfind.innerText = coloritems

var score = 0;
scoreElement = document.getElementById('score');
scoreElement.innerText = score;

for(let box of boxes){
    console.log(box)
    let bgcolor = colors[counter];
    box.id = counter++;
    box.style.backgroundColor = bgcolor
    box.addEventListener('click', ()=> {
        var style = getComputedStyle(box);
        console.log(bgcolor)
        console.log(box.id, style.backgroundColor)
        for(let i = 0 ; i<colors.length ; i++){
            if(coloritems == colors[i]){
                score += 1;
            }
        }
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

// Color Guessing

// [r,g,y,b,w,v]
// [0,1,2,3,4,5]

// for(let i = 0 ; i<colors.length ; i++){
//     if(coloritems == colors[i]){
//         score += 1;
//     }
// }


