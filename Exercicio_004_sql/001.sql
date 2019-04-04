create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade INT
);


-- Insercao
INSERT into usuarios(nome, email, idade) values("LUCIANA KFOURI","lunna.ags@gmail.com", 40);
INSERT into usuarios(nome, email, idade) values("Fabio KFOURI","fabio@gmail.com", 55);
INSERT into usuarios(nome, email, idade) values("maria KFOURI","lunna.ags@gmail.com", 50);
INSERT into usuarios(nome, email, idade) values("tiago KFOURI","fabio@gmail.com", 5);
INSERT into usuarios(nome, email, idade) values("cintia KFOURI","lunna.ags@gmail.com", 78);
INSERT into usuarios(nome, email, idade) values("william KFOURI","fabio@gmail.com", 33);

-- selecao
SELECT * from usuarios where idade >= 30;


-- delecao
DELETE from usuarios WHERE idade >=30;


-- update/atualizacao
update usuarios set email= "tiago@gmail.com" where nome= "tiago KFOURI";

