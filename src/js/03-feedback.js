
import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form')
const inputForm = document.querySelector('input')
const message = document.querySelector('textarea')

const localKey = 'feedback-form-state'

form.addEventListener('input', throttle(() => {
  const fieldsValue = {email: inputForm.value, message: message.value}
  localStorage.setItem('feedback-form-state', JSON.stringify(fieldsValue));
}, 500))


form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({email: inputForm.value, message: message.value});
  form.reset();
  localStorage.removeItem(localKey);
})


const load = k => {
  try {
    const serializedState = localStorage.getItem(k);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const storageBank = load(localKey);
if (storageBank) {
  inputForm.value = storageBank.email;
  message.value = storageBank.message;
}
