import path from 'path'
import Categorias from '../model/sqlCategorias.js';
import Livros from '../model/sqlLivros.js';
import { linksInternosNavegacao } from './linksDaPagina.js'
import fs from 'fs';
import formidable from 'formidable';
const templateAtualizarDadosLivro = path.resolve('.', 'view', 'atualizarDadosLivro.ejs');
const templateErro = path.resolve('.', 'view', 'erro.ejs');

export const atualizarLivroFinal = (req, res) => {
    const paramsCodLivro = req.params.isbn;
    const formData = new formidable.IncomingForm();
    return formData.parse(req, (err0, fields, files) => {
        const { categoria, titulo, autoria, ano_publicacao, isbn, imagem, quantidade, sinopse } = fields;
        return Categorias.getBooksCategories((err,row) => {
            Livros.getBookbyISBN(paramsCodLivro, (err1, row1) => { 
                if (!row1 && !err1) { 
                    return res.render(templateAtualizarDadosLivro, {
                        title: "Atualizar Dados do Acervo",
                        links: linksInternosNavegacao,
                        mensagem: "Livro ISBN inexistente",
                        row,
                        row1: "",
                        isbn
                    });
                };
                if (row1) {
                    const oldImagesPath = path.resolve('.', 'img', row1.imagem);
                    const imagesPath = path.resolve('.', 'img', files.imagem.newFilename);
                    const imagemNome = files.imagem.newFilename;
                    return Livros.updateBook(categoria, titulo, autoria, ano_publicacao, paramsCodLivro, imagemNome, quantidade, sinopse, (err2,row2) => {    
                        if (!err2) {               
                        fs.unlinkSync(oldImagesPath);
                        fs.renameSync(files.imagem.filepath, imagesPath);
                        return res.render(templateAtualizarDadosLivro, {
                            title: "Inserir livro no acervo",
                            links: linksInternosNavegacao,
                            mensagem: "Livro atualizado com sucesso na base de dados da Biblioteca Coder!",
                            row,
                            isbn: paramsCodLivro, 
                            row1: ""
                            });
                        }
                    });
                }
            });
        });
    });
};


                // return res.render(templateErro, {
                //     title: "Erro!",
                //     links: linksInternosNavegacao,
                //     mensagem: "Houve um erro na aplicação, por favor, tente novamente!"
                // });
           //});

                   //});