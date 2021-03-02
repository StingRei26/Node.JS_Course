const path = require('path');
const { request } = require('express');
const express = require('express')


const app = express(); 

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))



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

