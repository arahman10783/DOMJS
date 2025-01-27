// fetch Browser API built on xMLHttpRequest
// fetch enable us to call BE (server) or file
// method default GET others POST, PUT, DELETE
// response should be json

// const response = fetch(url, {
//   method: 'GET', //GET | POST | PUT | DELETE,
//   headers: {}, // setting required to access end point (token)
//   body: {} // data need to be sent to server
// })

//Errors
// 401 => un authorized
// 403 => foredid 
// 400 => bad request
// 404 => not found

// 500 => server errors


// Promise : fn arguments (2 call back functions )
// Resolve Fn => success
// Reject Fn => error

// const myPromise = new Promise(function(resolve, reject){
//   let x = 10
//   if(x == 0){
//     resolve(x)
//   }else{
//     reject(`${x} not equal 0`)
//   }
// })

// myPromise.then(
//   function(value) {console.log(value);},
//   function(error) {console.log(error);}
// )

const url = "https://api.openweathermap.org/data/2.5/weather"
const params = "?q=cairo&appid=c3893d1cc91c7d2a402863d4c414be54&units=metric"


fetch(url, {method: "GET"})
  .then(function(res){
    return res.json()
  })
  .then (resJSON => console.log(resJSON))
  .catch(err => console.log(err))

async function getWeatherData(){
  try {
    const res = await fetch(url, {method: "GET"})
    const data = await res.json()
    return data
  } catch (error) {
    console.log('error', error)
  }
  
}
getWeatherData()


//POST
const response = fetch(url, {
  method: 'POST', //GET | POST | PUT | DELETE,
  headers: {}, // setting required to access end point (token)
  body: JSON.stringify({ username: "example" }), // data need to be sent to server
})

// dend data with URL 
// headers (setting to enab;le connection)
// body
// query param url?q=
