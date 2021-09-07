'use strict';

const
  computerChoice = document.querySelector('#comp'),
  mainWindow = document.querySelector('main'),
  helpBtn = document.querySelector('.help'),
  rock = document.querySelector('#rock');

helpBtn.addEventListener('mouseenter', showAllArrows);
helpBtn.addEventListener('mouseleave', hideAllArrows);

rock.addEventListener('mouseenter', rockHelperShow);
rock.addEventListener('mouseleave', rockHelperHide);

function rockHelperShow() {
  createArrow(210, 190, 108, -45, true); // Rock to Scissors
  createArrow(245, 395, 270, 285, true); // Rock to Lizard
  createArrow(430, 185, 108, 45, true); // Paper to Rock
  createArrow(350, 232, 270, 75, true); // Spock to Rock
}

function rockHelperHide() {
  createArrow(210, 190, 108, -45); // Rock to Scissors
  createArrow(245, 395, 270, 285); // Rock to Lizard
  createArrow(430, 185, 108, 45); // Paper to Rock
  createArrow(350, 232, 270, 75); // Spock to Rock
}

createArrow(210, 190, 108, -45); // Rock to Scissors
createArrow(245, 395, 270, 285); // Rock to Lizard
createArrow(430, 185, 108, 45); // Paper to Rock
createArrow(490, 402, 90, 300); // Paper to Spock
createArrow(400, 282, 260, 180); // Scissors to Paper
createArrow(155, 400, 90, 240); // Scissors to Lizard
createArrow(290, 530, 40, 180); // Lizard to Spock
createArrow(420, 360, 230, 145); // Lizard to Paper
createArrow(350, 232, 270, 75); // Spock to Rock
createArrow(220, 360, 230, 37); // Spock to Scissors

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

function createArrow(x, y, width, angle, show) {
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
  if (show) {
    arrow.classList.remove('hide');
  } else if (show) {
    arrow.classList.add('hide');
  }
}



hideCompChoice(true);

function hideCompChoice(yes) {
  if (yes) {
    computerChoice.style.display = 'none';
  }
}