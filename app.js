'use strict';

const
  computerChoice = document.querySelector('#comp'),
  mainWindow = document.querySelector('main'),
  helpBtn = document.querySelector('.help');
// rock = document.querySelector('#rock'),
// scissors = document.querySelector('#scissors'),
// paper = document.querySelector('#paper'),
// lizard = document.querySelector('#lizard'),
// spock = document.querySelector('#spock');

let playerChoice;
let compChoice;

class Figure {
  constructor(name, num, isChosen, winIndexes, loseIndexes) {
    this.name = name;
    this.num = num;
    this.isChosen = isChosen;
    this.winIndexes = winIndexes;
    this.loseIndexes = loseIndexes;
  }
  render() {
    const div = document.createElement('div');
    div.innerHTML = `<div id="${this.name}" class="figure"></div>`;
    mainWindow.append(div);
  }
  showHelp() { // NOT YET!
    const helperFunc = `${this.name}HelperShow`;
    document.querySelector(`#${this.name}`).addEventListener('mouseenter', window[helperFunc]);
    document.querySelector(`#${this.name}`).addEventListener('mouseleave', window[helperFunc]);
  }
  click() {
    const name = this.name;
    document.querySelector(`#${this.name}`).addEventListener('click', () => {
      console.log(name);
      console.log(figures.indexOf(name));
    });
  }
}

const rock = new Figure('rock', 1, false, [1,3], [2,4]);
const scissors = new Figure('scissors', 1, false, [2,3], [0,4]);
const paper = new Figure('paper', 1, false, [0,4], [2,3]);
const lizard = new Figure('lizard', 1, false, [2,3], [4,0]);
const spock = new Figure('spock', 1, false, [2,3], [4,0]);

const figures = [rock, scissors, paper, lizard, spock];

figures.forEach(elem => {
  elem.render();
  elem.showHelp();
  elem.click();
});


// Show Hints

helpBtn.addEventListener('mouseenter', showAllArrows);
helpBtn.addEventListener('mouseleave', showAllArrows);

function helperShow(arrowId, color) {
  document.querySelector(arrowId).classList.toggle('hide');
  document.querySelector(arrowId).classList.toggle(color);
}

function rockHelperShow() {
  helperShow('#rockScissors', 'green');
  helperShow('#rockLizard', 'green');
  helperShow('#paperRock', 'red');
  helperShow('#spockRock', 'red');
}

function scissorsHelperShow() {
  helperShow('#scissorsPaper', 'green');
  helperShow('#scissorsLizard', 'green');
  helperShow('#spockScissors', 'red');
  helperShow('#rockScissors', 'red');
}

function paperHelperShow() {
  helperShow('#paperRock', 'green');
  helperShow('#paperSpock', 'green');
  helperShow('#scissorsPaper', 'red');
  helperShow('#lizardPaper', 'red');
}

function lizardHelperShow() {
  helperShow('#lizardSpock', 'green');
  helperShow('#lizardPaper', 'green');
  helperShow('#scissorsLizard', 'red');
  helperShow('#rockLizard', 'red');
}

function spockHelperShow() {
  helperShow('#spockScissors', 'green');
  helperShow('#spockRock', 'green');
  helperShow('#lizardSpock', 'red');
  helperShow('#paperSpock', 'red');
}

// Creating Arrows

createArrow(210, 190, 108, -45, 'rockScissors'); // Rock to Scissors
createArrow(245, 395, 270, 285, 'rockLizard'); // Rock to Lizard
createArrow(430, 185, 108, 45, 'paperRock'); // Paper to Rock
createArrow(490, 402, 90, 300, 'paperSpock'); // Paper to Spock
createArrow(400, 282, 260, 180, 'scissorsPaper'); // Scissors to Paper
createArrow(155, 400, 90, 240, 'scissorsLizard'); // Scissors to Lizard
createArrow(290, 530, 40, 180, 'lizardSpock'); // Lizard to Spock
createArrow(420, 360, 230, 145, 'lizardPaper'); // Lizard to Paper
createArrow(350, 232, 270, 75, 'spockRock'); // Spock to Rock
createArrow(220, 360, 230, 37, 'spockScissors'); // Spock to Scissors

function showAllArrows() {
  const arrows = document.querySelectorAll('.arrow');
  for (let arrow of arrows) {
    arrow.classList.toggle('hide');
  }
}

function createArrow(x, y, width, angle, idName) { // Can create Class!!!
  const arrow = document.createElement('div');
  const arrowHead = document.createElement('div');
  const arrowBody = document.createElement('div');
  arrow.classList.add('arrow');
  arrowHead.classList.add('arrow-head');
  arrowBody.classList.add('arrow-body');
  arrow.style.left = `${x}px`;
  arrow.style.top = `${y}px`;
  arrow.style.transform = `rotate(${angle}deg)`;
  arrowBody.style.width = `${width}px`;
  mainWindow.append(arrow);
  arrow.append(arrowHead);
  arrow.append(arrowBody);
  arrow.classList.add('hide');
  arrow.id = idName;
}

// hideCompChoice(true);

// function hideCompChoice(yes) {
//   if (yes) {
//     computerChoice.classList.toggle('hide');
//   }
// }

function changeFigureBorderColor(figure, color) {
  figure.classList.toggle(color);
}