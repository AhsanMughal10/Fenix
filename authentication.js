const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const apiconstants = require('./api_constants')
const appconstants = require('./app_constants')
const auth = require('./routes/auth')
const logger = require('./logger')


mongoose.connect(appconstants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log(apiconstants.DATABASE_CONNECTED))
.catch(err => console.log(apiconstants.DATABASE_ERROR , err));
const app = express()
app.use('/',express.static(path.join(__dirname , 'static')))
app.use(bodyParser.json())
app.use('/api/v1' , logger)
app.use('/api/v1' , auth)


app.listen(appconstants.PORT, () => {
    console.log('Server listening at' , appconstants.PORT)
})