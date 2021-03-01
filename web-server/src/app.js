const express = require('express')


const app = express(); 


// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About my app')
})

app.get('/weather', (req, res) => {
    res.send('This is the weather')
})

// To start server on port 3000
app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})

