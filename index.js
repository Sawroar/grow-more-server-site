const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const courses = require('./courses.json')
const course = require('./course.json')

app.get('/', (req, res) => {
    res.send('Course API Runing');
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourse = course.filter(n => n.category_id === id);
    res.send(categoryCourse)
})
app.get('/course/:id', (req, res) => {

    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse)
})
app.listen(port, () => {
    console.log('Course Api server on port', port)
})