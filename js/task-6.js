function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
function createBoxes(amount) {
  const initialSize = 30;
  boxesContainer.innerHTML = '';


  const boxes = Array.from({length: amount}, (element, index) => {
  const box = document.createElement('div');
  box.style.width = `${initialSize + index * 10}px`;
  box.style.height = `${initialSize + index * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
});
boxesContainer.append(...boxes);
}


destroyButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
