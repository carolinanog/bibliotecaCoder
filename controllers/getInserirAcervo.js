import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
import Categorias from '../model/sqlCategorias.js'
const templateInserirLivro = path.resolve('.', 'view', 'inserirAcervo.ejs')

export const inserirLivroAcervo = (req, res) => {
  return Categorias.getBooksCategories((err,row) => {
        return res.render(templateInserirLivro, {
        title: "Inserir novo livro no acervo",
        links: linksInternosNavegacao,
        mensagem: "",
        row
      })
  })

}