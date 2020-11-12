const validationInput = document.querySelector("#validation-input");

const validationInputLength = function () {
  if (
    validationInput.value.length < Number(validationInput.dataset.length) ||
    validationInput.value.length > Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.add("valid");
  }
};

validationInput.addEventListener("focus", () => {
  validationInput.classList = "";
});
validationInput.addEventListener("blur", validationInputLength);