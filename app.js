const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/page/index.html');
})

app.get('/sobre', function(req, res) {
    res.sendFile(__dirname + '/public/page/sobre.html');
})

app.get('/contato', function(req, res) {
    res.sendFile(__dirname + '/public/page/contato.html');
})

app.listen(8080, function(){
    console.log('Servidor rodando na porta: 8080')
})