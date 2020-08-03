export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;

  removeClassError(inputData);
  if (value.length >= minLength || value.length === 0) {
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function emailValidation(inputData) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;
  removeClassError(inputData);
  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    return true;
  } else {
    inputData.classList.add("error");
  }
}

function removeClassError(inputData) {
  inputData.classList.remove("error");
}
