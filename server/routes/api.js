const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    let UserModel = require('mongoose').model('User')
    UserModel.find().then(users => {      
        res.json(users)
    })
    .catch(err => {      
        res.status(500).send(err)
    })
})

router.get('/events', (req, res) => {
    let EventModel = require('mongoose').model('Event')
    EventModel.find().then(events => {
        res.json(events)
    })
    .catch(err=> {
        res.status(500).send(err)
    })
})

module.exports = router