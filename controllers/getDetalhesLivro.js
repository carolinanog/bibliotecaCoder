import path from 'path'
import { linksPublicosNavegacao } from './linksDaPagina.js'
import Livros from '../model/sqlLivros.js';
import Categorias from '../model/sqlCategorias.js';
const templateExibirDetalhes = path.resolve('.', 'view', 'exibirDetalhes.ejs')
const templateErro = path.resolve('.', 'view', 'erro.ejs')

export const exibirDetalhes = (req, res) => {
  const isbn = req.params.isbn;
  Livros.getBookbyISBN((isbn), (err, row) => {
    if(err){
      return res.render(templateErro,
         {title: "Detalhes do livro",
         links: linksPublicosNavegacao,
         mensagem: "Houve um erro ao consultar o dado."})
    }
    if(!row){
      return res.render(templateErro,
        {title: "Detalhes do livro",
        links: linksPublicosNavegacao,
        mensagem: "Livro não encontrado."})
    }
    const categoria = row.categoria
    return Categorias.getEachBookCat(Number(categoria), (errCat, cat) =>{ // Sobre return
      if(errCat){
        return res.render(templateErro,
          {title: "Detalhes do livro",
          links: linksPublicosNavegacao,
          mensagem: "Houve um erro ao buscar a categoria."})
      }
      if(!cat){
        return res.render(templateErro,
          {title: "Detalhes do livro",
          links: linksPublicosNavegacao,
          mensagem: "Categoria não encontrada."})
      }
      res.render(templateExibirDetalhes, {
        title: "Detalhes do livro",
        links: linksPublicosNavegacao,
        categoria, 
        isbn, 
        row, 
        cat 
      })
    })
  })
}

