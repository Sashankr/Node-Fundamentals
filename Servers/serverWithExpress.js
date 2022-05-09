const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/what-is-my-method',(req,res)=>{
    res.send('GET');
})

app.post('/what-is-my-method',(req,res)=>{
    res.send('POST');
})

app.put('/what-is-my-method',(req,res)=>{
    res.send('PUT');
})


app.delete('/what-is-my-method',(req,res)=>{
    res.send('DELETE');
})

app.patch('/what-is-my-method',(req,res)=>{
    res.send('PATCH');
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