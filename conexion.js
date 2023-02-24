const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmerstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('correct conection whit mongoDb')})
objetobd.on('error', ()=>{console.log('wrong conection whit mongoDb')})

module.export = mongoose