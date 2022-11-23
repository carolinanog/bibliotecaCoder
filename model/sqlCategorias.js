import sqlite3 from 'sqlite3';
import path from 'path';

export default class Categorias {
    static categoriasLivrosDB = new sqlite3.Database(path.resolve('.', 'database', 'biblioteca.db'));
    static getBooksCategories = (cb) => {this.categoriasLivrosDB.all(`SELECT * FROM categorias`, cb)};
    static getEachBookCat = (category, cb) => {this.categoriasLivrosDB.get(`SELECT * FROM categorias WHERE id = ?`, category, cb)};  
};