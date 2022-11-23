import sqlite3 from 'sqlite3';
import path from 'path';

export default class Livros {
    static livrosDB = new sqlite3.Database(path.resolve('.', 'database', 'biblioteca.db'));
    static getAllBooks = (cb) => {this.livrosDB.all(`SELECT * FROM livros`, cb)};
    static getBooksbyCategory = (category, cb) => {this.livrosDB.all(`SELECT * FROM livros WHERE categoria = ?`, category, cb)};
    static getBookbyISBN = (isbn, cb) => {this.livrosDB.get(`SELECT * FROM livros WHERE isbn = ?`, isbn, cb)};
    static deleteBookbyISBN = (isbn, cb) => {this.livrosDB.run(`DELETE FROM livros WHERE isbn = ?`, isbn, cb)};
    static insertBook = (categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse, cb) => {this.livrosDB.run(`INSERT INTO livros (categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse], cb)};
    static updateBook = (categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse, cb) => {this.livrosDB.run(`UPDATE livros SET categoria = ?, titulo = ?, autoria = ?, ano_publicacao = ?, imagem = ?, quantidade = ?, sinopse = ? WHERE isbn = ?`, [categoria, titulo, autoria, ano_publicacao, imagem, quantidade, sinopse, isbn], cb)};
};

