const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemamovie = new schema({
    id: String,
    title: String,
    year: Number,
    time: Number,
    lang: String,
    date: Number,
    country: String,
})

const ModelMovie = mongoose.model('movie',schemamovie)
module.exports = router

//router.get('/ejemplo', (req,res) => {
  //  res.end('saludo carga desde ruta ejemplo')
//})

//add movie route

router.post('/addmovie',(req,res)=>{
  const newMovie = new ModelMovie({
    title: req.body.title,
    year: req.body.year,
    time: req.body.time,
    lang: req.body.lang,
    date: req.body.date,
    country: req.body.country,
  })
  newMovie.save(function(err){
      if(!err){
          res.send('movie added successfully')
      }else{
          res.send(err)
      }   
    })
})