const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Course API Runing');
})
app.listen(port, () => {
    console.log('Course Api server on port', port)
})