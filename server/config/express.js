const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const api = require('../routes/api')
const path = require('path')

module.exports = (config, app) => {
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(session({
        secret: '51c8a50a-c82a-410e-80de-7515a758178b',
        resave: true,
        saveUninitialized: true
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use((req, res, next) => {
        if(req.user) {
            res.locals.currentUser = req.user
        }

        next()
    })
    app.use(express.static(config.rootPath + 'public'))
    app.use('/api', api)
    app.get('/', (req, res) => {
        res.sendFile(path.join(config.rootPath + 'src/index.html'))
    })
}