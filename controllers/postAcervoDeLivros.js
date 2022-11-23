import path from 'path'
import { linksPublicosNavegacao } from './linksDaPagina.js'
import Livros from '../model/sqlLivros.js';
import Categorias from '../model/sqlCategorias.js';
const templateExibirLivros = path.resolve('.', 'view', 'acervoDeLivrosCategoria.ejs')
const templateErro = path.resolve('.', 'view', 'erro.ejs')

export const exibirLivros = (req, res) => {
  const categoria = req.params.categoria;
  const isbn = req.params.isbn;
  Livros.getBooksbyCategory(Number(categoria), (err, row) => {
    if(err){
      return res.render(templateErro,
        {title: `Erro`,  links: linksPublicosNavegacao, mensagem: "Houve um erro ao consultar o dado."})
    }
    if(!row){
      return res.render(templateErro,
        {title: `Erro`,  links: linksPublicosNavegacao, mensagem: "Livro não encontrado."})
    }
    Categorias.getEachBookCat(Number(categoria), (errCat, cat) => {
      if(errCat){
        return res.render(templateErro,
          {title: `Erro`,  links: linksPublicosNavegacao, mensagem: "Houve um erro ao buscar a categoria."})
      }
      if(!cat && errCat){
        return res.render(templateErro,
          {title: `Erro`,  links: linksPublicosNavegacao, mensagem: "Categoria não encontrada."})
      }
      res.render(templateExibirLivros, {
        title: "Acervo de Livros",
        links: linksPublicosNavegacao,
        categoria, 
        isbn, 
        row, 
        cat
      })
    })
  })
}





