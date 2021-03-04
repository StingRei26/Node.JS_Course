const path = require('path');
const express = require('express')

const app = express() 
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))

// Using handlebars to serv dynamic html files (index.hbs)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather', 
        name: 'Rei'
    })
})
// Using handlebars to serv dynamic html files (about.hbs)
app.get('/about', (req, res) => {
    res.render('about', {
       title: 'About Me', 
       name: 'Rei Ravelo'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
     title: 'Help',
     message: 'This is the massage'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        
        forcast:'It is Nice and Sunny',
        location:'New Jersey'
    })
})


// To start server on port 3000
app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})

