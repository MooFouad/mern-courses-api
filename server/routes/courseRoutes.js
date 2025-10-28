const express = require('express')
const router = express.Router()

const {
  getCourses,
  getCourseById,
  updateCourse,
  createCourse,
  deleteCourse,
} = require('../controllers/coursesControllers')

router.get('/', getCourses)
router.get('/:id', getCourseById)
router.post('/', createCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router;