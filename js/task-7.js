const fontChange = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontChange.addEventListener('input', onFontChangeInput);
function onFontChangeInput(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}