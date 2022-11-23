import path from 'path'
import Livros from '../model/sqlLivros.js';
import Categorias from '../model/sqlCategorias.js';
import { linksInternosNavegacao } from './linksDaPagina.js';
import fs from 'fs';
import formidable from 'formidable';
const templateErro = path.resolve('.', 'view', 'erro.ejs');

const templateInserirLivro = path.resolve('.', 'view', 'inserirAcervo.ejs')

export const adicionarAcervo = (req, res) => {
    const formData = new formidable.IncomingForm();
    return formData.parse(req, (err1, fields, files) => {
        const { categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse } = fields;
        return Categorias.getBooksCategories((err,row) => {
            return Livros.getBookbyISBN(isbn, (err0, row1) => { 
                if (!!row1 && row1.isbn === isbn) { 
                    return res.render(templateInserirLivro, {
                    title: "Inserir livro do acervo",
                    links: linksInternosNavegacao,
                    mensagem: "Este livro já existe em nosso acervo, não é possível cadastrá-lo em duplicidade!",
                    row
                });
            }; 
            const imagesPath = path.resolve('.', 'img', files.imagem.newFilename);
            const imagemNome = files.imagem.newFilename;
            return Livros.insertBook(categoria, titulo, autoria, ano_publicacao, isbn, imagemNome, quantidade, sinopse, (err2,row2) => {
                if (!err2) {
                    fs.renameSync(files.imagem.filepath, imagesPath);
                    return res.render(templateInserirLivro, {
                        title: "Inserir livro no acervo",
                        links: linksInternosNavegacao,
                        mensagem: "Livro inserido com sucesso na base de dados da Biblioteca Coder!",
                        row
                    });
                }
                return res.render(templateErro, {
                    title: "Erro!",
                    links: linksInternosNavegacao,
                    mensagem: "Houve um erro na aplicação, por favor, tente novamente!"
                });
            });
            });
        });
    });
};