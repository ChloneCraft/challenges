import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountries = countries.filter((country) => {
    return country.name.toLowerCase().startsWith(searchString.toLowerCase());
  });

  if (foundCountries) {
    foundCountries.forEach((element) => {
      const countryElement = Country(element);
      container.append(countryElement);
    });
  }
});
