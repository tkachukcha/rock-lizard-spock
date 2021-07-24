'use strict';

const arrow1 = document.querySelector('.arrow');
const computerChoice = document.querySelector('#comp');



computerChoice.style.backgroundImage = "url('/img/rock.jpg')";

hideCompChoice(true);

function hideCompChoice(yes) {
  if (yes) {
    computerChoice.style.display = 'none';
  }
}


