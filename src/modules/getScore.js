const getScore = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GID46231/scores/',
    );
    if (!response.ok) {
      return false;
    }
    const scores = await response.json();
    return scores.result;
  } catch (error) {
    return false;
  }
};
export default getScore;
