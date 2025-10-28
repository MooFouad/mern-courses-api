const Courses = require('../models/courseModel')

// All Courses
const getCourses = async (req, res)=>{
  const courses = await Courses.find();
  res.send(courses);
}
// Single course
const getCourseById = async (req, res)=>{
  try{
      const course = await Courses.findById(req.params.id);
      if(!course) return res.status(404).send('Course not found')
      res.send(course);
  }catch (err){
    res.status(400).send('Invalid ID');
  }
}
// ctreate new course
const createCourse = async (req, res)=>{
  try{
    const course = new Courses(req.body)
    await course.save();
    res.status(201).send(course)
  }catch (err){
    res.status(400).send('Invalid ID');
  }
}
// update a course 
const updateCourse = async (req, res)=>{
  try{
    const course = await Courses.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true}
    )
    if(!course) return res.status(404).send('course not found')
    res.send(course);
  }catch (err){
    res.status(400).send('Invalid ID');
  }
}
// delete course 
const deleteCourse = async (req, res)=>{
  try{
  const course = await Courses.findByIdAndDelete(req.params.id)
  if(!course) return res.status(404).send('course not found')
    res.send(course);
  }catch (err){
    res.status(400).send('Invalid ID');
  }
}

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
}