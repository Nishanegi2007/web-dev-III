const  http = require('http');

const users=[
    {id:1,name:'John'},
    {id:2,name:'Jane'},
    {id:3,name:"Bob"},]

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.method);
    // res.end('Hello World again ');

    if(req.url==='/')
        {res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>welcome to home page</h1>");
        res.end();}
    else if(req.url==='/about')
        {res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>welcome to about page</h1>");
        res.end();}
    else if(req.url==='/users' && req.method==='GET')
        {res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(users));
        res.end();}
    else if (req.url==='/users/count' && req.method==='GET')
        {res.writeHead(200,{'Content-Type':'application/json'});
        const response = {
            success:true,
            count:users.length
        }
        res.write(JSON.stringify(response));
        res.end();
        }
    else if(req.method==='POST' && req.url==='/users'){
        let  body="";
        req.on('data',(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201,{'Content-Type':'application/json'});
            res.write(JSON.stringify(users));
            res.end();
        });
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1>404 page not found</h1>");
        
        res.end(); 
    }
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});