const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let requiredValidationMessage = '{PATH} is required'

let userSchema = mongoose.Schema({
    username: { type: String, required: requiredValidationMessage, unique: true},
    firstName: { type: String, required: requiredValidationMessage },
    lastName: { type: String, required: requiredValidationMessage },
    isOrganization: { type: Boolean, default: false },
    organizationName: { type: String },
    website: { type: String },
    avatarPath: { type: String },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date, default: null },
    deletedOn: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    salt: String,
    hashedPass: String
})