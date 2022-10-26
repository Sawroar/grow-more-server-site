const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const course = require('./courses.json')
app.get('/', (req, res) => {
    res.send('Course API Runing');
})
app.get('/courses', (req, res) => {
    res.send(course)
})
app.listen(port, () => {
    console.log('Course Api server on port', port)
})