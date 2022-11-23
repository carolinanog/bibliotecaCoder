import path from 'path'
import { linksPublicosNavegacao } from "./linksDaPagina.js"
import sqlBibliotecarios from "../model/sqlBibliotecarios.js"

const bibliotecarios = path.resolve('.', 'view', 'bibliotecarios.ejs')

export const exibirBibliotecarios = (req, res) => {

    sqlBibliotecarios.selecionarTodosBiblitoecarios((err, rows) => {
        res.render(bibliotecarios, {
        bibliotecarios: rows,
        title: "Nossa equipe",
        links: linksPublicosNavegacao
        })
})
}