const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.json()); // This is for parsing JSON bodies
router.use(express.urlencoded({ extended: true })); 
const post = [];

router.get('/post-create', (req, res) => {
    res.sendFile(path.join(__dirname,'../views','addPost.html'))
})

router.post('/', (req, res) => {
    const { title, content } = req.body
    console.log(`Title value is "${title}" & content value is "${content}"`)
    res.redirect('/')
    // res.json(req.body)

    post.push({
        title,
        content
    })
})

module.exports = {adminRoute:router,post}