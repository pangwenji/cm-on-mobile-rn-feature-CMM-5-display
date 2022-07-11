const http = require('http');
const fs = require('fs');
// http.createServer((req, res) => {
//         res.writedHead(200, { 'Content-type': "text/plain" });
//         res.send("hello Node js");
// }).listen(3000,"127.0.0.1")

 let  app = http.createServer((req, res) => {
        if (req.url === './index') {
                res.writedHead(200, { 'Content-type': "text/plain" });
                res.send("hello Node js");
        } else { 
                proxy(req, res);
        } 
 })

const proxy = (req, res) => { 
        let options = {
                host:req.host,
                port:3001,
                headers: req.headers,
                methods: "GET",
                agent: false,
                path:"/"
                
        }
        let httpProxy = http.request(options, (repose) => { 
                reponse.pipe(res)
        })
        req.pipe(httpProxy);
}
app.listen(3000, (data) => {
        console.log(data,'启动服务a');
 })