'use strict';

const
  computerChoice = document.querySelector('#comp'),
  mainWindow = document.querySelector('main'),
  helpBtn = document.querySelector('.help'),
  rock = document.querySelector('#rock'),
  scissors = document.querySelector('#scissors'),
  paper = document.querySelector('#paper'),
  lizard = document.querySelector('#lizard'),
  spock = document.querySelector('#spock');
  
let playerChoice;
let compChoice;

// Show Hints

helpBtn.addEventListener('mouseenter', showAllArrows);
helpBtn.addEventListener('mouseleave', hideAllArrows);

rock.addEventListener('mouseenter', rockHelperShow);
rock.addEventListener('mouseleave', rockHelperHide);

scissors.addEventListener('mouseenter', scissorsHelperShow);
scissors.addEventListener('mouseleave', scissorsHelperHide);

paper.addEventListener('mouseenter', paperHelperShow);
paper.addEventListener('mouseleave', paperHelperHide);

lizard.addEventListener('mouseenter', lizardHelperShow);
lizard.addEventListener('mouseleave', lizardHelperHide);

spock.addEventListener('mouseenter', spockHelperShow);
spock.addEventListener('mouseleave', spockHelperHide);

function rockHelperShow() {
  document.querySelector('#rockScissors').classList.remove('hide');
  document.querySelector('#rockLizard').classList.remove('hide');
  document.querySelector('#paperRock').classList.remove('hide');
  document.querySelector('#spockRock').classList.remove('hide');
}

function rockHelperHide() {
  document.querySelector('#rockScissors').classList.add('hide');
  document.querySelector('#rockLizard').classList.add('hide');
  document.querySelector('#paperRock').classList.add('hide');
  document.querySelector('#spockRock').classList.add('hide');
}

function scissorsHelperShow() {
  document.querySelector('#scissorsPaper').classList.remove('hide');
  document.querySelector('#scissorsLizard').classList.remove('hide');
  document.querySelector('#spockScissors').classList.remove('hide');
  document.querySelector('#rockScissors').classList.remove('hide');
}

function scissorsHelperHide() {
  document.querySelector('#scissorsPaper').classList.add('hide');
  document.querySelector('#scissorsLizard').classList.add('hide');
  document.querySelector('#spockScissors').classList.add('hide');
  document.querySelector('#rockScissors').classList.add('hide');
}

function paperHelperShow() {
  document.querySelector('#scissorsPaper').classList.remove('hide');
  document.querySelector('#paperRock').classList.remove('hide');
  document.querySelector('#paperSpock').classList.remove('hide');
  document.querySelector('#lizardPaper').classList.remove('hide');
}

function paperHelperHide() {
  document.querySelector('#scissorsPaper').classList.add('hide');
  document.querySelector('#paperRock').classList.add('hide');
  document.querySelector('#paperSpock').classList.add('hide');
  document.querySelector('#lizardPaper').classList.add('hide');
}

function lizardHelperShow() {
  document.querySelector('#scissorsLizard').classList.remove('hide');
  document.querySelector('#rockLizard').classList.remove('hide');
  document.querySelector('#lizardSpock').classList.remove('hide');
  document.querySelector('#lizardPaper').classList.remove('hide');
}

function lizardHelperHide() {
  document.querySelector('#scissorsLizard').classList.add('hide');
  document.querySelector('#rockLizard').classList.add('hide');
  document.querySelector('#lizardSpock').classList.add('hide');
  document.querySelector('#lizardPaper').classList.add('hide');
}

function spockHelperShow() {
  document.querySelector('#spockScissors').classList.remove('hide');
  document.querySelector('#spockRock').classList.remove('hide');
  document.querySelector('#lizardSpock').classList.remove('hide');
  document.querySelector('#paperSpock').classList.remove('hide');
}

function spockHelperHide() {
  document.querySelector('#spockScissors').classList.add('hide');
  document.querySelector('#spockRock').classList.add('hide');
  document.querySelector('#lizardSpock').classList.add('hide');
  document.querySelector('#paperSpock').classList.add('hide');
}

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
    arrow.classList.remove('hide');
  }
}

function hideAllArrows() {
  const arrows = document.querySelectorAll('.arrow');
  for (let arrow of arrows) {
    arrow.classList.add('hide');
  }
}

function createArrow(x, y, width, angle, idName) {
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



hideCompChoice(true);

function hideCompChoice(yes) {
  if (yes) {
    computerChoice.style.display = 'none';
  }
}