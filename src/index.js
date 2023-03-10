import './styles/main.css';
import getScore from './modules/getScore.js';
import renderScore from './modules/renderScore.js';
import postScore from './modules/postScore.js';

const submitBtn = document.querySelector('.submitBtn');
const nameInput = document.querySelector('.nameInput');
const scoreInput = document.querySelector('.scoreInput');
const refreshBtn = document.querySelector('.refreshBtn');
const errorMessage = document.querySelector('.errorMessage');

// Initial page load
window.addEventListener('DOMContentLoaded', () => {
  renderScore();
});

// Function to submit data
const submitData = async () => {
  if (nameInput.value.trim() !== '' && scoreInput.value.trim() !== '') {
    await postScore({
      user: nameInput.value.trim(),
      score: +scoreInput.value.trim(),
    });
    errorMessage.classList.add('hide');
    nameInput.value = '';
    scoreInput.value = '';
  } else {
    errorMessage.classList.remove('hide');
  }
};

// Listen for a click event on the submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitData();
});

// Listen for "keypress" event on nameInput
nameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitData();
  }
});

// Listen for "keypress" event on scoreInput
scoreInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitData();
  }
});

// Refresh list
refreshBtn.addEventListener('click', async () => {
  await getScore();
  renderScore();
});
