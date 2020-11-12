const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onNameInputElSubmit);
function onNameInputElSubmit(event) {
  const name = nameInputEl.value;
  if (name === '') {
    nameOutputEl.textContent = 'незнакомец';
  } else {
    nameOutputEl.textContent = name;
  }
}