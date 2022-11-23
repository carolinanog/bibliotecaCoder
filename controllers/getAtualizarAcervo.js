import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
const atualizardadosacervo = path.resolve('.', 'view', 'atualizarDadosAcervo.ejs');


export const atualizarDadosAcervo = (req, res) => {

    res.render(atualizardadosacervo, {
        title: "Atualizar Dados do Acervo",
        links: linksInternosNavegacao,
        mensagem: ""
    })
}