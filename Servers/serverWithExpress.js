const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/something',(req,res)=>{
    res.send('This is usually not visible')
})

fetch('/something',{
    method : 'POST'
}).then(res =>{
    console.log(res.text()); // to access the text sent in post we need to fetch it and print the text
})

app.listen(process.env.PUBLIC_PORT);