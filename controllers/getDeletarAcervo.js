import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
const templateDeletarLivroAcervo = path.resolve('.', 'view', 'deletarAcervo.ejs');

export const inserirISBNpDel = (req, res) => {

    res.render(templateDeletarLivroAcervo, {
        title: "Deletar livro do acervo",
        links: linksInternosNavegacao,
        mensagem: ""
    })
}