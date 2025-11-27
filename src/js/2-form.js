let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  inputEmail.value = formData.email;
  inputMessage.value = formData.message;
}

form.addEventListener('input', () => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (inputEmail.value === '' || inputMessage.value === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();

  formData = { email: '', message: '' };
});
