const express = require("express");
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
//Template Engine
app.engine('handlebars', handlebars({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req,res){ 
    res.render('home');
})

app.get('/cad', function(req,res){ 
    res.render('formulario');
})

app.post('/add', function(req,res){ 
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).than(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Hove um erro: " + erro)
    })
})

app.listen(8083, function(){
    console.log("Servidor Rodando na url http://localhost:8083")
});