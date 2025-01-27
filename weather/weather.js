const baseURL = "https://api.openweathermap.org/data/2.5/weather"
const appID = "c3893d1cc91c7d2a402863d4c414be54"



// const params = "?q=cairo&appid=&units=metric"

let currentWeather = {}
let errorMessage
let currantLocation = {}

async function getCurrentWeather(city){
  try {
    let res = await fetch(`${baseURL}?q=${city}&units=metric&appid=${appID}`);
    console.log('res', res)
    let data = await res.json()
    currentWeather = {...data}
    document.getElementById("cityName").innerHTML = data.name
    document.getElementById("tempIcon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    document.getElementById("mainTemp").innerHTML = `${Math.floor(data.main.temp)} C`
    document.getElementById('feelLike').innerHTML = `${Math.floor(data.main.feels_like)} C`
  
  } catch (error) {
    errorMessage = error.message
  }
  
}

getCurrentWeather("alexandria")
console.log("after async")

// to detect location
// Latitude lat
// Longitude lon
function detectMyLocation (){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayLocation) //callback fn
  }else{
    console.log('geolocation not supported')
  }
}

function displayLocation(loc) {
  currantLocation =  {
    lat: loc.coords.latitude,
    lon: loc.coords.longitude
  }
}

detectMyLocation()

async function getWeatherByLoc({lat,lon}){
  try {
    const res = await fetch(`http://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&lang=en&unit=metric`)
    document.getElementById("tempImgRes").src = res.url

  } catch (error) {
    errorMessage = error.message
  }

}

getWeatherByLoc(currantLocation) //image to be shown
