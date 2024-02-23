


let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    
    if (xhr.status >= 200 && xhr.status < 300) {
        
        let countries = JSON.parse(xhr.responseText);

        
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.flags) {
                console.log(country.name.common + ': ' + country.flags.svg);
            } else {
                console.log(country.name.common + ': No flag available');
            }
        }
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};




xhr.send();
