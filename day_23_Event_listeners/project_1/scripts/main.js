const style = document.createElement('style');
style.innerHTML = `
  * {
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
  }
  h1{
    text-align: center;
    font-weight: bold;
  }
  h3, p {
    text-align: center;
    text-decoration: underline;
  }
  .input {
    margin: 0 auto;
  }
  input {
    height:50px;
    border-radius: 3px;
  }
  button{
    background-color: greenyellow;
    height: 50px;
  }
  .box {
    width: 150px;
    height: 120px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  .box--even {
    background-color: green;
  }
  .box--odd {
    background-color: yellow;
  }
  .box--prime {
    background-color: blue;
  }
`;
document.body.appendChild(style);

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');

const message = document.createElement('p');
message.classList.add('warning-message');
body.appendChild(message);

const div1 = document.createElement('div');
div1.classList.add('input');
wrapper.appendChild(div1);

const input = document.createElement('input');
input.type = 'text';
div1.appendChild(input);

const button = document.createElement('button');
button.innerHTML = 'Generate Numbers';
div1.appendChild(button);

button.addEventListener('click', function () {
  const val = parseInt(input.value);
  if (isNaN(val) || val <= 0) {
    message.textContent = 'Please enter a positive integer';
    message.style.color = 'red';
    return;
  }

  message.innerHTML = '';
  wrapper.innerHTML = '';
  div1.appendChild(input);

  for (let i = 0; i <= val; i++) {
    const box = document.createElement('div');
    box.textContent = i;
    box.classList.add('box');
    if (i % 2 === 0) {
      box.classList.add('box--even');
    } else {
      box.classList.add('box--odd');
    }
    if (isPrime(i)) {
      box.classList.add('box--prime');
    }
    wrapper.appendChild(box);
  }
});

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
