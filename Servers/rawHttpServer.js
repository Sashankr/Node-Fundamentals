const http = require('http');

const server =  http.createServer((req,res)=>{
    res.write('Hello client!')
    res.end()
});

console.log(process.env.PUBLIC_PORT);

server.listen(process.env.PUBLIC_PORT,()=>{
    console.log('Hey , we are ready to take requests');
})