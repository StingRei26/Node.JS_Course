const path = require('path');
const express = require('express')
const hbs = require('hbs');

const app = express() 

//Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath =path.join(__dirname, '../templates/views')
const partialsPath =path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location / modules needed 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath); 


//Set up static directory to serve
app.use(express.static(publicDirectoryPath))

// Using handlebars to serv dynamic html files (index.hbs)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather', 
        name: 'Reiniel Ravelo', 
    })
})
// Using handlebars to serv dynamic html files using / as the path
app.get('/about', (req, res) => {
    res.render('about', {
       title: 'About Me', 
       name: 'Reiniel Ravelo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
     helpText: 'This is some helpful text', 
     title: 'Help',
     name: 'Reiniel Ravelo'
    })
})

// This leads to a .json files via 'send'
app.get('/weather', (req, res) => {
    res.send({
        forcast:'It is Nice and Sunny',
        location:'New Jersey'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404', 
        name: 'Reiniel Ravelo', 
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Reiniel Ravelo', 
        errorMessage: 'Page not found.'

    })
})


// To start server on port 3000
app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})


