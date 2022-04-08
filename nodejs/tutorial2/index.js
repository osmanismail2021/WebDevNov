const http = require('http') //nodejs core module
const Sum = require('./modules/sum') // our module
const sayHello = require('./modules/sayHello')

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Hello World</h1>')
    res.end()

}).listen(8080),function(){
    console.log('Server is running')
}