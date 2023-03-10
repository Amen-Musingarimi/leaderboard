import getScore from './getScore.js';

const renderScore = async () => {
  const response = await getScore();
  const scoresList = document.querySelector('.scoresList');
  scoresList.innerHTML = '';
  const sortedResponse = response.sort((a, b) => b.score - a.score);

  const listItems = sortedResponse.map(
    (data, index) => `
    <li class="score">
      <div class="posAndName">
        <span class="scoreNumber">#${index + 1}</span>
        <div class="userIconAndName">
          <i class="fa-solid fa-user"></i>
          <p class="playerName">${data.user}:</p>
        </div>
      </div>
      <p class="playerScore">${data.score.toLocaleString('en-US')}</p>
    </li>
  `,
  );
  scoresList.innerHTML = listItems.join('');
};

export default renderScore;
