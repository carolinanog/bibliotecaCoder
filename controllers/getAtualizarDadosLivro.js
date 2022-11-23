import path from 'path'
import Categorias from '../model/sqlCategorias.js';
import { linksInternosNavegacao } from './linksDaPagina.js'
const templateAtualizarDadosLivro = path.resolve('.', 'view', 'atualizarDadosLivro.ejs');

export const atualizarDadosLivro = (req, res) => {
    return Categorias.getBooksCategories((err,row) => {
    res.render(templateAtualizarDadosLivro, {
        title: "Atualizar Dados do Acervo",
        links: linksInternosNavegacao,
        mensagem: "",
        row,
        isbn: "",
        row1: ""
    })
    });
};