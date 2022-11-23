-- SQLite
DROP TABLE IF EXISTS bibliotecarios;

CREATE TABLE bibliotecarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(50) NOT NULL,
    foto TEXT NOT NULL,
    login VARCHAR(20) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

INSERT INTO bibliotecarios(nome, foto, login, senha) 
VALUES ("Ana Carla Almeida", "ana.jpg", "acalmeida", "acalmeida123"), ("Andrea Silva", "andrea.jpg", "asilva", "asilva123"), ("Bruno Castro Ferreira", "bruno.jpg", "bcferreira", "bcferreira123"), ("Zelda Melo", "zelda.jpg", "zmelo", "zmelo123");

SELECT * FROM bibliotecarios;