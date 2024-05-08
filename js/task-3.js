const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', handleInput);
const outputEl = document.querySelector('#name-output');

function handleInput(evt) {
  const input = evt.target;
  if (input.value.trim().length > 0) {
    outputEl.textContent = `${input.value}`;
  } else {
    outputEl.textContent = 'Anonymous';
  }
}
