let order =[];
let clickedOrder = [];
let score = 0;

//[0]=verde;
//[1]=vermelho;
//[2]=amarelo;
//[3]=azul;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffledOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}

let checkOrder = () => {
  for (let i in clickedOrder ) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  } if (clickedOrder.length == order.length) {
    alert(`Pontuação: $(score)\nVocê acertou! Iniciando próximo nível! `);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');
  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

let createColorElement = (color) => {
  if(color == 0) {
    return green;
  } else if(color == 1) {
    return red;
  } else if(color == 2) {
    return yellow; 
  } else if(color ==3) {
    return blue;
  }
}

let nextLevel = () => {
  score +=1;
  shuffledOrder();
}

let gameOver = () => {
  alert(`Pontuação: $(score)!\nVocê perdeu o jogo!\nClique em OK para gerar um novo jogo!`);
  order = [];
  clickedOrder = [];
  playGame();
}

let playGame = () => {
  alert('Bem-vindo ao Genius! Iniciando novo jogo');
  score = 0;
  nextLevel();
}

window.onload = () => {
  green.addEventListener('click', click(0));
  red.addEventListener = ('click', click(1));
  yellow.addEventListener = () => click(2);
  blue.addEventListener = () => click(3);
}
playGame();
