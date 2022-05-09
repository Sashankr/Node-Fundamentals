const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/what-is-my-method', (req, res) => {
    res.send('GET');
})

app.post('/what-is-my-method', (req, res) => {
    res.send('POST');
})

app.put('/what-is-my-method', (req, res) => {
    res.send('PUT');
})


app.delete('/what-is-my-method', (req, res) => {
    res.send('DELETE');
})

app.patch('/what-is-my-method', (req, res) => {
    res.send('PATCH');
})

app.post('/something', (req, res) => {
    res.send('This is usually not visible')
})

app.listen(PORT);

console.log(PORT);

app.get('/example', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})