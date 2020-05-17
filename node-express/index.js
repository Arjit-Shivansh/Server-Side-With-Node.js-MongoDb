var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');

const hostname = "localhost";
const port = 3000;
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());



app.use('/dishes',dishRouter);
app.use('/promos',promoRouter);
app.use('/leaders',leaderRouter);

app.use(express.static(__dirname + "/public"));

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    res.end("<html><body><h1>This is an Express server</h1></body></html>");
});

const server = http.createServer(app);
server.listen(port,hostname,()=>{console.log(`Server running at http://${hostname}:${port}`)});