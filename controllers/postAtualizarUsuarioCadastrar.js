import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
import UsuariosCadastrados from '../model/sqlUsuariosCadastro.js'
const listaDeCadastros = path.resolve('.', 'view', 'listaDeCadastros.ejs')
const consultarUsuario = path.resolve('.', 'view', 'consultarUsuario.ejs')
const atualizarCadastro = path.resolve('.', 'view', 'atualizarCadastro.ejs')
const deletarUsuario = path.resolve('.', 'view', 'deletarUsuario.ejs')

export const opcaoAtualizarDadosUsuario = (req, res) => {
  const { acao } = req.params
  switch ( acao ) {
    case "listar":
      return UsuariosCadastrados.selecionarTodosUsuario((err, row) => {
        res.render(listaDeCadastros, {
        title: "Lista de Cadastrados",
        links: linksInternosNavegacao,
        mensagem: "",
        row
        })
      })
    case "consultar":
      return res.render(consultarUsuario, {
        title: "Consultar Usuário",
        links: linksInternosNavegacao,
        mensagem: "",
        row: ""
        })
    case "atualizar":
      return res.render(atualizarCadastro, {
        title: "Atualizar Cadastro",
        links: linksInternosNavegacao,
        mensagem: "",
        row: ""
        })
    case "deletar":
      return res.render(deletarUsuario, {
        title: "Deletar Usuário",
        links: linksInternosNavegacao,
        mensagem: ""
        })
    default:
      res.render('<h1>Erro</h1>')
    //exibir página de erro
  }
}

