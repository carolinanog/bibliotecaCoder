import sqlite3 from 'sqlite3';
import path from 'path';

export default class Contato {
    static contatoDB = new sqlite3.Database(path.resolve('.', 'database', 'biblioteca.db'));
    static receberContato = (nome, email, mensagem, cb) => {this.contatoDB.run(`INSERT INTO contato(nome, email, mensagem) VALUES(?, ?, ?)`, [nome, email, mensagem,], cb)};  
};