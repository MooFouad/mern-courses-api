const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name : {type : String , required : [true, 'Name is requred']},
  price : {type : Number , required : [true, 'Name is requred']},
})

module.exports = mongoose.model('Courses', courseSchema);