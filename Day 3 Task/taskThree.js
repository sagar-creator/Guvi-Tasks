
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    
    if (xhr.status >= 200 && xhr.status < 300) {
       
        let countries = JSON.parse(xhr.responseText);

       
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            console.log('Name: ' + country.name.common);
            console.log('Region: ' + country.region);
            console.log('Subregion: ' + country.subregion);
            console.log('Population: ' + country.population);
            console.log('----------------------');
        }
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};




xhr.send();
