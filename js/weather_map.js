
$(document).ready(function() {
    // Make AJAX request to OpenWeatherMap API for current weather conditions
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        method: 'GET',
        data: {
            q: 'Tampa Bay',
            appid: 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1906777872fa7414e1e324e7062dba58',
            units: 'metric'
        },
        success: function(response) {
            // Process the response and display current weather conditions
            const currentWeather = response.weather[0].description;
            $('#current-weather').text('Current Weather: ' + currentWeather);
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
    // Make AJAX request to OpenWeatherMap API for five-day forecast
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        method: 'GET',
        data: {
            q: 'Tampa Bay',
            appid: 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1906777872fa7414e1e324e7062dba58',
            units: 'metric'
        },
        success: function(response) {
            // Process the response and display the five-day forecast
            // You can iterate over the forecast data and format it as desired
            // For example: response.list[0].dt_txt will give you the date and time of the first forecast entry
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9
});

let marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat([-74.5, 40]).addTo(map);

marker.on('dragend', function() {
    let lngLat = marker.getLngLat();
    // Use lngLat to make an AJAX request to the OpenWeatherMap API and update the forecast
    // You can reuse the same AJAX request code from the previous example
});
