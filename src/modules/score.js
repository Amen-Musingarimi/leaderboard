export default class Scores {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
    this.index = 0;
  }

  addScore(name, mark, callback) {
    function handleError(error) {
      const errorMessage = document.querySelector('.errorMessage');
      errorMessage.textContent = `An error occurred while adding the score: ${error.message}`;
      errorMessage.classList.remove('hide');
    }

    this.name = name;
    this.mark = mark;

    const newScore = new Scores(name, mark);
    const scoresPromise = new Promise((resolve) => {
      const scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];
      scoresArray.push(newScore);
      scoresArray.forEach((a, i) => {
        a.index = i + 1;
      });
      localStorage.setItem('scoresArray', JSON.stringify(scoresArray));
      resolve(scoresArray);
    });

    scoresPromise
      .then((scoresArray) => {
        if (typeof callback === 'function') {
          callback(scoresArray);
        }
      })
      .catch((error) => {
        handleError(error);
      });
  }
}
