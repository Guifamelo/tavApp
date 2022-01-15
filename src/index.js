//  -REQUIRES...
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()  

const app = express()
const routes = require('./routes')



mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true    
}, console.log('ok-Conectado com o DB'))


app.use(cors())
app.use(express.json())
app.use(routes)




app.listen(3333, () => console.log('Server Servindo'))






