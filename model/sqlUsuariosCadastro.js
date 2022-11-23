import sqlite3 from 'sqlite3'
import path from 'path'

export default class UsuariosCadastrados {
    static dbUsuariosCadastrados = new sqlite3.Database(path.resolve('.', 'database', 'biblioteca.db'))

    static inserirUsuario = (nome, CPF, telefone, email, callback) => {
        this.dbUsuariosCadastrados.run(
        `INSERT INTO usuarios (nome, CPF, telefone, email) VALUES (?, ?, ?, ?)`,
        [ nome, CPF, telefone, email ], callback) 
    }
    
    static deletarUsuario = (CPF, callback) => {
        this.dbUsuariosCadastrados.run(
        `DELETE FROM usuarios WHERE CPF = ?`, CPF, callback)
    }

    static selecionarTodosUsuario = (callback) => {
        this.dbUsuariosCadastrados.all(`SELECT * FROM usuarios`, callback)
    }

    static selecionarUmUsuario = (CPF, callback) => {
        this.dbUsuariosCadastrados.get(`SELECT * FROM usuarios WHERE CPF = ?`, CPF, callback)
    }
    static atualizarUsuario = (nome, telefone, email, CPF, callback) => {
        this.dbUsuariosCadastrados.run(`UPDATE usuarios SET nome = ?, telefone = ?, email = ? WHERE CPF = ?`, [nome, telefone, email, CPF], callback)
    }
}