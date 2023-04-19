const style = document.createElement('style');
style.innerHTML = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .wrapper {
    text-align: center;
  }
`;
document.head.appendChild(style);

const wrapper = document.querySelector('.wrapper');
const year = document.querySelector('#year');
const challenge = document.querySelector('#challenge');
const datetime = document.querySelector('#datetime');
const python = document.querySelector('#python');
const js = document.querySelector('#js');
const react = document.querySelector('#react');
const fullstack = document.querySelector('#fullstack');
const data = document.querySelector('#data');
const reactnative = document.querySelector('#reactnative');
const machinelearning = document.querySelector('#machinelearning');

// Change year color every 1 second
setInterval(() => {
  year.style.color = getRandomColor();
}, 1000);

// Change challenge background color every 1 second
setInterval(() => {
  datetime.style.backgroundColor = getRandomColor();
}, 1000);

// set font size for year
year.style.fontSize = '50px'

// Set styles for completed challenge
python.style.backgroundColor = '#4caf50';
python.style.color = '#fff';

// Set styles for ongoing challenge
js.style.backgroundColor = '#ffeb3b';
js.style.color = '#333';

// Set styles for coming challenges
[react, fullstack, data, reactnative, machinelearning].forEach(challenge => {
  challenge.style.backgroundColor = '#f44336';
  challenge.style.color = '#fff';
});

// Update date and time automatically
setInterval(() => {
  const now = new Date();
  const date = now.toDateString();
  const time = now.toLocaleTimeString();
  datetime.innerHTML = `${date} ${time}`;
}, 1000);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}





