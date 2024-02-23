console.log("********************* total population of countries using reduce function*********************");

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    const totalPopulation = countries.reduce((acc, country) => acc + (country.population || 0), 0);
    console.log('Total population of countries:', totalPopulation);
};



