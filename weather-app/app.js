const request = require('request')
const geocode = require('./utils/geocode')


// const url = 'http://api.weatherstack.com/current?access_key=6b4b984cc50d04840187eb3f416ccb4a&query=37.8267,-122.4233&units=f';
// request({ url: url, json: true }, (error, response) => {
    
//    if (error) {
//     console.log("Unable to connect to weather service");
//    } else if (response.body.error) {
//     console.log("Unable to find location");
//    } 
//    else {
//      const body = response.body.current;
//      console.log(body.weather_descriptions[0] + ". It is currently" + " " + body.temperature + " " + "degress out. It feels like 5 out.");
//    }  
// })


geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (weather, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6b4b984cc50d04840187eb3f416ccb4a&query=37.8267,-122.4233&units=f';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service");
        } else if (response.body.error) {
            callback("Unable to find location")
        } else {
            callback(undefined, {
                console.log(response.body.current.weather_descriptions[0] + ". It is currently" + " " + body.temperature + " " + "degress out. It feels like 5 out.")
            })
        }
    })
}


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});