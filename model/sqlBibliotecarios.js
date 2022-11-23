import sqlite3 from 'sqlite3'
import path from 'path'

export default class sqlBibliotecarios {

    static dbBibliotecarios = new sqlite3.Database(path.resolve('.', 'database', 'biblioteca.db'))
   
    static selecionarTodosBiblitoecarios = (callback) => {
        this.dbBibliotecarios.all(`SELECT * FROM bibliotecarios`, callback)
    }

    static verificarLogin = (login, callback) => {
        this.dbBibliotecarios.get(`SELECT * FROM bibliotecarios WHERE login = ?`, login, callback)
    }
}