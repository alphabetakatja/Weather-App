window.addEventListener('load', () => {
    let long, lat;
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(`long = ${long}, lat = ${lat}`);
            const API_Key = 'c7c60711a5eaa085bdbccbf56944a6eb';
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const url = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${API_Key}&units=metric`;


            fetch(url)
                .then(response => {
                    // console.log(JSON.stringify(response));
                    // console.log(`response: ${JSON.stringify(response)}`);
                    return response.json();
                })
                .then(data => {
                    // console.log(`data: ${JSON.stringify(data)}`);
                    console.log('data: ', data);
                    
                    // Set DOM elements from the API
                    locationTimezone.textContent = data.timezone;
                    temperatureDegree.textContent = Math.ceil(data.current.temp);
                    temperatureDescription.textContent = data.current.weather[0].description;

                })
                .catch(error => console.log(`There's been an error: ${error}`))
        });
    } else {
        h1.textContent = 'Please enable your location tracker...Unable to retrieve your location.'
    }
});