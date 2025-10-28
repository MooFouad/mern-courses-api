require('dotenv').config();
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const coursesRoutes = require('./routes/courseRoutes')

const app = express()
// to allow frontend access my api 
app.use(cors({
  origin: "http://localhost:3000", // عنوان الفرونت
  credentials: true,               // لو هتستخدم كوكيز أو توكنات
}));
// return json data from header
app.use(express.json())
// connect with database
connectDB();
// main routes
app.use('/api/courses', coursesRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
  console.log('server running on port 5000')
} )