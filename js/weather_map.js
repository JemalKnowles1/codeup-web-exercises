
const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById
('current-weather-items')
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

/**
 * Array that gives current date
 * @type {string[]}
 */
const days = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

let API_KEY = "5648fc267c440f05f8cbb4b7e2a43c4a";
/**
 * interval that grabs current time
 */
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes()
    const ampm = hour >= 12 ? 'PM' : 'AM'

    timeE1.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`
    dateE1.innerHTML = days[day] + ', ' + date + ' ' + months[month]


}, 1000);

/**
 * gets current location of user and returns local weather
 */
getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords
        $.get(`https://api.openweathermap.org/data/2.5/forecast?
        lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`).then(res => res.json()).then(data => {
            showWeatherData(data)
        })
        });
}

/**
 *  grabs current timezone and country data while returning and updating weather
 * @param data
 */
function showWeatherData(data) {
    let [humidity, pressure, sunrise, sunset, wind_speed,] = data.current
    timezone.innerHTML = data.timeZone
    countryE1.innerHTML = data.lat + 'N' + data.lon+'E'
    currentWeatherItemsE1.innerHTML =
        `<div class="weather-item">
    <p>Humidity</p>
    <p>${humidity}</p>
        </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
  <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
      <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
`;

    /**
     * sets the forecast of future weather
     * @type {string}
     */

    let otherDayForecast = ''
data.daily.forEach((day, idx) => {
    if(idx === 0){
        currentTempE1.innerHTML =
           `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
                 alt="weather icon" class="w-icon">
                <div class="other">
                    <div class="day">Monday</div>
                    <div class="temp">${day.temp.night}&#176; C</div>
                    <div class="temp">${day.temp.day}&#176; C</div>
                </div>`
    }else{
        otherDayForecast +=
            `<div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
                     alt="weather icon" class="w-icon">
                    <div class="temp">Night - ${day.temp.night}&#176; C</div>
                    <div class="temp">Day - ${day.temp.day}&#176; C</div>
            </div>`
    }
    })
    weatherForecastE1.innerHTML = otherDayForecast
}
