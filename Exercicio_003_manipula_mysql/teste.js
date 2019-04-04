const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'luciana', { 
    host: "localhost",
    dialect: 'mysql'

})


//comentario de uma linha


/*
comentario de muitas linhas

sequelize.authenticate().then(function (){
    console.log("conectado com sucesso!")
}).catch(function (erro){
    console.log("falha ao se conectar: "+erro)
})
*/




const Postagem = sequelize.define('postagens', {
    titulo: { 
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize. TEXT
    }
})

//Postagem.sync({force: true})
/* 
Postagem.create({
    titulo: "teste",
    conteudo:"qualqr="
})
*/


const Usuario = sequelize.define('usuarios', {
    nome: { 
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize. INTEGER
    },
    email: {
        type: Sequelize.STRING

    }
})


//Usuario.sync({force: true})

Usuario.create({
    nome:"Fabio",
    sobrenome:'Kfouri',
    idade:'39',
    email:'bla'
})

Usuario.create({
    nome:"Led",
    sobrenome:'zeppelin',
    idade:'6',
    email:'blu'
})