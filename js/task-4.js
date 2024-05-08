const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(data);

  form.reset();
}
