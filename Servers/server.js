const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8080;


app.use(express.static(path.resolve(__dirname,'public')));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Welcome to the application');
})

app.post('/',(req,res)=>{
    console.log(req.body); // returns undefined by node
    res.status(200).json({
        responseMessage : 'ok'
    })
})

app.listen(PORT);