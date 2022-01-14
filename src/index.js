const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrliParser: true
}, console.log('ok-Conectado com o DB'))

app.listen(3333, () => console.log('Server Servindo'))
