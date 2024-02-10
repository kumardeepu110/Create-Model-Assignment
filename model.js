const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:{type:String, default:''},
    email:{type:String, default:''},
    branch:{type:String, default:''},
    createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('student',studentSchema)