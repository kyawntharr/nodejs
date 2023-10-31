const express = require('express')
const router = express.Router()
const path = require('path')
router.use('/post', (req, res, next) => {
    console.log('i am post middleware')
    next();
})

router.get('/post', (req, res) => {
    // res.send('<h2>I am post route</h2>')
    res.sendFile(path.join(__dirname, '../views', 'postpage.html'))
})

module.exports = router
