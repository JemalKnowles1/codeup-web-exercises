
const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById('date');
const newName = document.getElementById("cityInput")
const cityName = document.getElementById('cityName')
cityName.innerHTML = "--"+newName.value+"--"
/**
 * Array that gives current date
 * @type {string[]}
 */
const days = ["Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];

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


