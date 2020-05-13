window.addEventListener('load', () => {
    let long, lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(`position: ${position}`);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(`long = ${long}, lat = ${lat}`);
        });
    } else {
        h1.textContent = 'Please enable your location tracker...'
    }
});