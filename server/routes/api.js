const express = require('express')
const router = express.Router()

const axios = require('axios')
const api = 'https://jsonplaceholder.typicode.com'

router.get('/', (req, res, err) => {
    if (err) console.log(err)
    res.send('api works')
})

router.post('/posts', (req, res, err) => {
    if (err) res.status(500).send(err)
    axios.get(`${api}/posts`)
        .then(posts =>{
            res.status(200).json(posts.data)
        })
        .catch(error => {
            res.status(500).send(error)
        })
})

module.exports = router