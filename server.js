var express = require('express');
var app = express();

let env = process.env.NODE_ENV || 'development'
let config = require('./server/config/config')[env]

require('./server/config/database')(config)
require('./server/config/express')(config, app)
require('./server/config/passport')()

app.listen(config.port)
console.log('Express ready!')
