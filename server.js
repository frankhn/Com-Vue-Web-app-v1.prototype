var express = require('express');
var history = require('connect-history-api-fallback');

const serveStatic = require('serve-static');
app = express();
app.use(history())
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);