import getScore from './getScore.js';

const renderScore = async () => {
  const response = await getScore();
  const scoresList = document.querySelector('.scoresList');
  scoresList.innerHTML = '';
  response.forEach((data) => {
    scoresList.innerHTML += `
    <li class="score">
            <p class="playerName">${data.user}: </p>
            <p class="playerScore">${data.score}</p>
          </li>
    `;
  });
};

export default renderScore;
