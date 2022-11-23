import path from 'path'
import sqlBibliotecarios from "../model/sqlBibliotecarios.js"

const templateLogin = path.resolve('.', 'view', 'login.ejs')

export const verificarLogin = (req, res) => {
    const { login, senha } = req.body
    let mensagem
    sqlBibliotecarios.verificarLogin(login, (err, rows) => {
        if (!!rows) {
           if (rows.senha === senha) {
            return res.redirect("../sistemainterno")
           } else {
            mensagem = "Senha incorreta. Tente novamente."
           }
        } else if (rows === undefined) {
            mensagem = "Bibliotecário inexistente. Tente novamente."
        } 
        res.render(templateLogin, {
        bibliotecarios: rows,
        title: "",
        mensagem
        })
})
}