fetch('https://restcountries.com/v3.1/all')
.then((response) => {
    return response.json();
})
.then((countries) => {
    
    if (countries && countries.length > 0) {
        
        for (let i = 0; i < countries.length; i++) {
           
            if (i % 3 === 0) {
                let cardRow = document.createElement('div');
                cardRow.classList.add('row');
                document.getElementById('cardRow').appendChild(cardRow);
            }

           
            let countryContainer = document.createElement('div');
            countryContainer.classList.add('col-lg-4', 'col-sm-12');
            document.getElementById('cardRow').lastChild.appendChild(countryContainer);

           
            let h1tag = document.createElement('h1');
            h1tag.classList.add('container','text-center');
            h1tag.id=('title');

            h1tag.textContent = countries[i].name.common;
            countryContainer.appendChild(h1tag);

            let countryFlag = document.createElement('img');
            countryFlag.src = countries[i].flags.png;
            countryContainer.appendChild(countryFlag);

            let ptag = document.createElement('p');
            ptag.textContent = `Capital: ${countries[i].capital}`;
            countryContainer.appendChild(ptag);

            let p2tag = document.createElement('p');
            p2tag.textContent = `Region: ${countries[i].region}`;
            countryContainer.appendChild(p2tag);

            let p3tag = document.createElement('p');
            p3tag.textContent = `Country Code: ${countries[i].cca3}`;
            countryContainer.appendChild(p3tag);

            let btn = document.createElement('button');
            btn.textContent = 'Click For Weather';
            btn.id = 'btn' + i;
            btn.classList.add('btn', 'btn-primary');
            countryContainer.appendChild(btn);

            let h3tag = document.createElement('h3');
            h3tag.id = 'weather' + i; 
            countryContainer.appendChild(h3tag);

           
            btn.onclick = function () {
                let coOrdinates = countries[i].latlng;
                let latitude = coOrdinates[0];
                let longitude = coOrdinates[1];

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`)
                    .then(response => response.json())
                    .then(weatherData => {
                        let temp = weatherData.main.temp;
                        document.getElementById('weather' + i).textContent = `Temperature is ${temp}`;
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            };
        }
    } else {
        console.log('No countries found in the response');
    }
})
.catch((error) => {
    console.log('Error fetching countries', error);
});