const express = require('express')
const app = express()

//conection whit mongodb
const archivoBD = require('./conexion')

app.get('/', (req, res) => {
    res.end('Welcome to the backend server')
})
//import routes
const routemovie = require('./routes/movie')

//import body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
    
app.use('/api/movie', routemovie) 

app.listen(5000, function(){
    console.log('The server is running')
})

