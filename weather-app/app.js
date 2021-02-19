//http://api.weatherstack.com/current?access_key=6b4b984cc50d04840187eb3f416ccb4a&query=37.8267,-122.4233


const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6b4b984cc50d04840187eb3f416ccb4a&query=37.8267,-122.4233&units=f';
request({ url: url, json: true }, (error, response) => {
    
   if (error) {
    console.log("Unable to connect to weather service");
   } else if (response.body.error) {
    console.log("Unable to find location");
   } 
   else {
     const body = response.body.current;
     console.log(body.weather_descriptions[0] + ". It is currently" + " " + body.temperature + " " + "degress out. It feels like 5 out.");
   }  
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpbmllbCIsImEiOiJja2xhNmFyOWgydmxkMm90N3kyajZxankwIn0.nn1AtE04aDInWrEF12t4Hw&limit=1'
request({ url: geocodeURL, json: true }, (error, response) => {

if (error) {
    console.log("Unable to connect to location service")
} else if (response.body.features.length === 0){
    console.log("Unable to find location. Try another search."); 
} else {
    const latitude = response.body.features[0].center[0];
    const longitue = response.body.features[0].center[1];
    console.log(latitude, longitue);
 }
})