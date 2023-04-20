const wrapper = document.querySelector(".wrapper");

const style = `
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 800px;
    height: 500px;
    border: 1px solid #000;
    padding: 20px;
    box-sizing: border-box;
  }

  .number {
    display: inline-block;
    width: 46px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    margin: 2px;
    box-sizing: border-box;
    border: 1px solid #000;
  }

  .green {
    background-color: green;
  }

  .yellow {
    background-color: yellow;
  }

  .red {
    background-color: red;
  }
`;

const head = document.head || document.getElementsByTagName("head")[0];
const styleEl = document.createElement("style");
head.appendChild(styleEl);
styleEl.appendChild(document.createTextNode(style));

for (let i = 0; i <= 101; i++) {
  const number = document.createElement("div");
  number.classList.add("number");

  if (i % 2 === 0) {
    number.classList.add("green");
  } else {
    number.classList.add("yellow");
  }

  if (isPrime(i)) {
    number.classList.add("red");
  }

  number.textContent = i;
  wrapper.appendChild(number);
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
