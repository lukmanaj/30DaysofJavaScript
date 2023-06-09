const countriesContainer = document.querySelector(".countries-wrapper");
const totalCountries = document.querySelector("#total-countries");

totalCountries.textContent = `Total Number of Countries: ${countries.length}`;

const style = `
  .countries-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .countries-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    padding: 20px;
    box-sizing: border-box;
  }

  .country {
    display: inline-block;
    width: 260px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 24px;
    margin: 8px;
    box-sizing: border-box;
    border: 1px solid #000;
  }
`;

const head = document.head || document.getElementsByTagName("head")[0];
const styleEl = document.createElement("style");
head.appendChild(styleEl);
styleEl.appendChild(document.createTextNode(style));

countries.forEach((country) => {
  const countryEl = document.createElement("div");
  countryEl.classList.add("country");
  countryEl.textContent = country;
  countriesContainer.appendChild(countryEl);
});

const header = document.querySelector("header");
header.style.textAlign = "center";
