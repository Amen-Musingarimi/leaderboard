import './styles/main.css';
import Scores from './modules/score.js';

const scoresList = document.querySelector('.scoresList');

function printScore() {
  const scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];
  let innerhtml = '';

  scoresArray.forEach((score) => {
    innerhtml += `
    <li class="score">
            <p class="playerName">${score.name}: </p>
            <p class="playerScore">${score.mark}</p>
          </li>`;
  });

  const submitBtn = document.querySelector('.submitBtn');
  const name = document.querySelector('.nameInput');
  const score = document.querySelector('.scoreInput');

  submitBtn.addEventListener('click', (event) => {
    if (name.value !== '' || score.value !== '') {
      event.preventDefault();
      const obj = new Scores();
      obj.addScore(name.value, score.value);
      printScore();

      name.value = '';
      score.value = '';
    }
  });

  scoresList.innerHTML = innerhtml;
}

printScore();
