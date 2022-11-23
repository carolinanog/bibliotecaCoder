import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
import Livros from '../model/sqlLivros.js';
const templateDeletarLivroAcervo = path.resolve('.', 'view', 'deletarAcervo.ejs');

export const deletarLivroAcervo = (req, res) => {
    Livros.getBookbyISBN(req.body.ISBN, (err,row) => {
        if (!err && row === undefined) { 
            res.render(templateDeletarLivroAcervo, {
            title: "Deletar livro do acervo",
            links: linksInternosNavegacao,
            mensagem: "O livro não existe no acervo com este ISBN."
        })
        } else {
            Livros.deleteBookbyISBN(req.body.ISBN, (err2) => {
                res.render(templateDeletarLivroAcervo, {
                title: "Deletar livro do acervo",
                links: linksInternosNavegacao,
                mensagem: "Livro excluído do acervo com sucesso!"
                });
            });
        };
    });
};
