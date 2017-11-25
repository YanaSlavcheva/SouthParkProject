const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let requiredValidationMessage = '{PATH} is required'

let eventSchema = mongoose.Schema({
    name: { type: String, required: requiredValidationMessage },
    startDate: { type: Date, required: requiredValidationMessage },
    endDate: { type: Date, required: requiredValidationMessage },
    description: { type: String, required: requiredValidationMessage },
    website: { type: String },
    locationDescription: { type: String },
    locationLongitude: { type: String },
    locationLatitude: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    organizer: { type: String },
    price: Number,
    avatarPath: String
})

let Event = mongoose.model('Event', eventSchema)
let UserModel = require('mongoose').model('User')

module.exports.seedTestEvent = () => {
    Event.find().then(events => {
        if (events.length === 0) { 
            UserModel.find({ username: 'Admin' }).then(adminUser => {
                let authorId
                if (adminUser.length) {
                    authorId = adminUser[0]._id
                } else {
                    authorId = null
                }
                
                Event.create({
                    name: '5km run',
                    startDate: new Date(2017, 11, 25, 09, 00),
                    endDate: new Date(2017, 11, 25, 11, 00),
                    description: 'Mass running event for enthusiasts',
                    website: 'http://5kmrun.bg/',
                    organizer: '5km run bg - Много повече от бягане',
                    price: 0,
                    author: authorId
                })
            })
        }
    })
}