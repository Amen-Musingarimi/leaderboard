const postScore = async (playerScore) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Vd1Kn67VwbjHPDwYt8cS/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/Json',
          charset: 'utf-8',
        },
        body: JSON.stringify(playerScore),
      },
    );

    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export default postScore;
