
console.log("********************* All countries with details of  name, capital, flag, using forEach function*********************");

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    countries.forEach(country => {
        const { name, capital, flags } = country;
        const flag = flags && flags.length > 0 ? flags[0] : "No flag available";
        console.log(`Name: ${name.common}, Capital: ${capital || "N/A"}, Flag: ${flag}`);
    });
};




    