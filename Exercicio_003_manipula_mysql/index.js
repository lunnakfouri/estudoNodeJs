const express= require( 'express')

const app = express()


app.get('/', function( req, res){
    //res.send('seja bem vindo')
    res.sendFile(__dirname + "/html/index.html")
    //res.send('<html><body><h1>Outra pagina</h1></body></html>')
})

app.get('/xpto', function( req, res){
    res.send('seja bem vindo')
})


app.get( '/ola/:nome', function(req,res){
    res.send('boa noite ' + req.params.nome)
})

app.get('/sobre', function(req, res){
    res.send('sobre teste')
})







// este comando tem que ser o ultimo
app.listen(10000, function(){
    console.log("rodando")
})

