import { linksPublicosNavegacao } from "./linksDaPagina.js"
import path from 'path'
const paginaInicial = path.resolve('.', 'view', 'paginaInicial.ejs')

export const exibirPaginaInicial = (req, res) => {
    // Aqui
    res.render(paginaInicial, {
    title: "Página inicial",
    links: linksPublicosNavegacao
})}