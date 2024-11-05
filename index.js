var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('public', { index: '/index.html' }));
app.use('/css', express.static('public' + '/css'));

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');