import path from 'path';
import { linksPublicosNavegacao } from './linksDaPagina.js';
import Livros from '../model/sqlLivros.js';
import Categorias from '../model/sqlCategorias.js';
const templateConsultarLivros = path.resolve('.', 'view', 'consultarLivros.ejs');

export const consultarLivros = (req, res) => {
  Categorias.getBooksCategories((err, categoria) => {
      Livros.getAllBooks((err, row) => {
        res.render(templateConsultarLivros, {
        title: "Acervo de Livros",
        links: linksPublicosNavegacao, 
        row, 
        categoria
      });
    });
  })
}

