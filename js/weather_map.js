
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

/**
 * gets current location of user and returns local weather
 */
function getInfo() {
    const newName = document.getElementById("cityInput")
    const cityName = document.getElementById('cityName')
    cityName.innerHTML = "--"+newName.value+"--"
}
// fetch(`https://api.openweathermap.org/data/2.5/
// weather?q='+newName.value+'&APPID=${API_KEY}`).then(response =>response.json()).then(data =>{
//     for(i=0 ; i<5 ; i++){
//         document.getElementById("day"+(i+1)+"Min").innerHTML
//             ="Min:" +Number(data.list[i].main.temp_min -288.53).toFixed(1)
//
//             ="Max:" +Number(data.list[i].main.temp_min -288.53).toFixed(1)
//     }
// })

/**
 *  grabs current timezone and country data while returning and updating weather
 * @param data
 */
