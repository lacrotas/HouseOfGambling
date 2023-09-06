// containers html
const firstLine = document.querySelector('.container-first');
const secondLine = document.querySelector('.container-second');
const thirdLine = document.querySelector('.container-third');

//color variations
const colors = ['#478BF9', '#7DDACF', '#FFFFFF', '#9DADF2'];
//image variatins
const images = ["Ball.png", "Crown.png", "Dollar.png", "M.png", "shield.png", "Time.png"];

function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function genericItem() {
    return '<div class="item_border" style="background-color:' + colors[random(0, 3)] + ';"> <img class="item_image" src="./assets/image/icons/' + images[random(0, 5)] + '" alt="" /> </div>';
}

function genericItemLong() {
    let randomColor = colors[random(0, 3)];
    return '<div class="item_border-container" style="background-color:' + randomColor + ';"><div class="item_border" style="background-color:' + randomColor + ';"> <img class="item_image" src="./assets/image/icons/' + images[random(0, 5)] + '" alt="" /> </div>  <div class="container_bottom"></div></div>';
}

function createLine() {
    for (let i = 0; i < 30; i++) {
        if (i % 4 == 0) {
            firstLine.innerHTML += genericItemLong();
            secondLine.innerHTML += genericItemLong();
            thirdLine.innerHTML += genericItemLong();
        } else {
            firstLine.innerHTML += genericItem();
            secondLine.innerHTML += genericItem();
            thirdLine.innerHTML += genericItem();
        }
    }
}

createLine();
