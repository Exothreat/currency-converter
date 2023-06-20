const formElement = document.querySelector(".calculator__form");
const amountElement = document.querySelector(".calculator__input--amount");
const previousCurrencyElement = document.querySelector(".js-currencyPrevious");
const afterCurrencyElement = document.querySelector(".js-currencyAfter");
const resultElement = document.querySelector(".calculator__result--strong");
const exRateElement = document.querySelector(".calculator__exRate--strong");
const buttonElement = document.querySelector(".calculator__button");

const ratePLN = 1;
const rateEUR = 4.45;
const rateUSD = 4.13;
const rateGBP = 5.19;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = +amountElement.value;
  const currencyPrevious = previousCurrencyElement.value;
  const currencyAfter = afterCurrencyElement.value;

  switch (currencyPrevious) {
    case "PLN":
      rate = amount * ratePLN;
      break;

    case "EUR":
      rate = amount * rateEUR;
      break;

    case "USD":
      rate = amount * rateUSD;
      break;

    case "GBP":
      rate = amount * rateGBP;
      break;
  }

  switch (currencyAfter) {
    case "PLN":
      result = rate / ratePLN;
      break;

    case "EUR":
      result = rate / rateEUR;
      break;

    case "USD":
      result = rate / rateUSD;
      break;

    case "GBP":
      result = rate / rateGBP;
      break;
  }

  resultElement.innerText = `${amount.toFixed(
    2
  )} ${currencyPrevious} = ${result.toFixed(2)} ${currencyAfter}`;
});
