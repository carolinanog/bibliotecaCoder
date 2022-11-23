import { linksInternosNavegacao } from "./linksDaPagina.js"
import path from 'path'
const sistemaInterno = path.resolve('.', 'view', 'sistemaInterno.ejs')

export const exibirSistemaInterno = (req, res) => {
    res.render(sistemaInterno, {
    title: "Sistema Interno",
    links: linksInternosNavegacao
})}