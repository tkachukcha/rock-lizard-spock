'use strict';

class Figure {
  constructor(name, element) {
    this.name = name;
    this.element = element;
  }
  render() {
    const div = document.createElement('div');
    div.innerHTML = `<div id="${this.name}" class="figure"></div>`;
    mainWindow.append(div);
    this.element = document.querySelector(`#${this.name}`);
  }
  showHelp() {
    const helperFunc = `${this.name}HelperShow`;
    document.querySelector(`#${this.name}`).addEventListener('mouseenter', window[helperFunc]);
    document.querySelector(`#${this.name}`).addEventListener('mouseleave', window[helperFunc]);
  }
  chooseAndPlay() {
    document.querySelector(`#${this.name}`).addEventListener('click', () => {
      playerChoice = figures.indexOf(this);
      compChoice = random(0, 5);
      play();
    });
  }
}

const
  mainWindow = document.querySelector('main'),
  helpBtn = document.querySelector('.help'),
  playerText = document.querySelector('#player'),
  compText = document.querySelector('#computer'),
  result = document.querySelector('#result'),
  comp = document.querySelector('#comp'),
  imgs = ['assets/img/rock.jpg', 'assets/img/scissors.jpg', 'assets/img/paper.jpg', 'assets/img/lizard.jpg', 'assets/img/spock.jpg', 'assets/img/comp.jpg'],
  winners = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 0],
    [2, 4],
    [3, 2],
    [3, 4],
    [4, 0],
    [4, 1]
  ], 
  rock = new Figure('rock'),
  scissors = new Figure('scissors'),
  paper = new Figure('paper'),
  lizard = new Figure('lizard'),
  spock = new Figure('spock'),
  figures = [rock, scissors, paper, lizard, spock];

 

let compChoice,
    playerChoice,
    playerScore = 0,
    compScore = 0;

figures.forEach(elem => {
  elem.render();
  elem.showHelp();
  elem.chooseAndPlay();
});

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

// Show Hints

helpBtn.addEventListener('mouseenter', showAllArrows);
helpBtn.addEventListener('mouseleave', showAllArrows);

function play() {
  comp.classList.remove('red');
  comp.classList.remove('green');
  comp.classList.add('play');
  comp.classList.toggle(`hide`);
  setTimeout(() => {
    comp.style.backgroundImage = `url(${imgs[compChoice]})`;
    if (playerChoice === compChoice) {
      result.textContent = `it's a tie!`;
    } else { 
      let fight = [playerChoice, compChoice];
      let playerName = figures[playerChoice].name;

      winners.forEach(pair => {
        if (fight[0] === pair[0] && fight[1] === pair[1]) {
          result.textContent = `${figures[playerChoice].name} vs ${figures[compChoice].name}: You win!`;
          winColorChange(figures[playerChoice].element);
          loseColorChange(comp);
          playerScore++;
        } else if (fight[1] === pair[0] && fight[0] === pair[1]) {
          result.textContent = `${figures[playerChoice].name} vs ${figures[compChoice].name}: Computer wins!`;
          winColorChange(comp);
          loseColorChange(figures[playerChoice].element);
          
          compScore++;
        }
      });
      console.log(`Your score: ${playerScore}, comp score: ${compScore}`);
    }
    setTimeout(() => {
      figures[playerChoice].element.classList.remove('red');
      figures[playerChoice].element.classList.remove('green');
      comp.classList.toggle(`hide`);
      comp.style.backgroundImage = `url(${imgs[5]})`;
    }, 1000);
  }, 2000);
}

function random(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

function winColorChange(figure) {
  figure.classList.remove('red');
  figure.classList.add('green');
}

function loseColorChange(figure) {
  figure.classList.remove('green');

  figure.classList.add('red');
}

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