function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls > input');

const createEl = document.querySelector('button[data-create]');

const destroyEl = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const initialSize = 30;

  boxesEl.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = initialSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.flexShrink = 0;

    boxesEl.appendChild(box);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createEl.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = '';
  } else {
    inputEl.value = '';
    return;
  }
});

destroyEl.addEventListener('click', destroyBoxes);
