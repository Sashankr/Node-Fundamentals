const http = require('http');

const server =  http.createServer((req,res)=>{
    res.write('Hello client!')
    res.end()
});

console.log(process.env.PUBLIC_PORT);

server.listen('localhost:3000',()=>{
    console.log('Hey , we are ready to take requests');
})