const crypto = require('crypto')

module.exports = {
    generateSalt: () =>
        crypto.randomBytes(128).toString('base64'),
    generateHashedPassword: (salt, pwd) =>
        crypto.createHmac('sha256', slat).update(pwd).digest('hex')
}