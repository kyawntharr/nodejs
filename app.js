const express = require('express');
const port = 3000
const app = express();
const path = require('path');
const bodyParser = require('body-parser')

const postRoute = require('./routes/post')
const {adminRoute} = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))
app.use(postRoute)

// app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log('i am middleware')
    next()
})
app.use('/admin',(req, res, next) => {
    console.log('Admin middleware approve')
    next()
})

app.use("/admin", adminRoute)

app.get('/', (req, res) => {
    // res.sendFile('./views/homepage.html',{root:__dirname})
    res.sendFile(path.join(__dirname,'views','homepage.html'))
})


app.listen(port)