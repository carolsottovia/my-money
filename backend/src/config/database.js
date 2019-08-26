const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = 
    "The '{VALUE}' reported is less than the minimum limit of '{MIN}'."
mongoose.Error.messages.Number.max = 
    "The '{VALUE}' reported is greater than the upper limit of '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' not valid for attribute '{PATH}'."
