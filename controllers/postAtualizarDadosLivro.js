import path from 'path'
import Categorias from '../model/sqlCategorias.js';
import Livros from '../model/sqlLivros.js';
import { linksInternosNavegacao } from './linksDaPagina.js'
const templateAtualizarDadosLivro = path.resolve('.', 'view', 'atualizarDadosLivro.ejs');

export const recebeISBNAtualizar = (req, res) => {
    const isbn = req.body.isbn;
    Categorias.getBooksCategories((err,row) => {
        Livros.getBookbyISBN(isbn, (err1,row1) => {   
            if(row1 && !err1){
                return res.render(templateAtualizarDadosLivro, {
                    title: "Atualizar Dados do Acervo",
                    links: linksInternosNavegacao,
                    mensagem: "Atualize os campos abaixo desejados.",
                    row,
                    row1,
                    isbn
            });
            }
            if (row1 === undefined){
                return res.render(templateAtualizarDadosLivro, {
                    title: "Atualizar Dados do Acervo",
                    links: linksInternosNavegacao,
                    mensagem: "Livro ISBN inexistente",
                    row,
                    row1: "",
                    isbn
                });
            }
        });
    });
};