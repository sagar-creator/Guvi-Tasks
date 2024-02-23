
console.log("*********************all the countries with a population of less than 2 lakhs*********************");

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    const countryPopulation = countries.filter(country => country.population < 200000);
    countryPopulation.forEach(country => {
        console.log(`Country: ${country.name.common}, Population: ${country.population}`);
    });
};


