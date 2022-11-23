import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
import UsuariosCadastrados from '../model/sqlUsuariosCadastro.js'
import verificarCPF from '../js/validarCPF.js'
const consultarUsuario = path.resolve('.', 'view', 'consultarUsuario.ejs')
const atualizarCadastro = path.resolve('.', 'view', 'atualizarCadastro.ejs')
const deletarUsuario = path.resolve('.', 'view', 'deletarUsuario.ejs')

export const acaoOpcaoAtualizarDadosUsuario = (req, res) => { 
  const { acao } = req.params
  switch ( acao ) {
    case "consultar":
      if (!verificarCPF(req.body.CPF)) {
        return res.render(consultarUsuario, {
          title: "Consultar Usuário",
          links: linksInternosNavegacao,
          mensagem: `CPF incorreto. Seu cadastro não pôde ser consultado.`,
          opcao: "/consultar",
          row: ""
          })
      } else {
        return UsuariosCadastrados.selecionarUmUsuario(verificarCPF(req.body.CPF), (err, row) => {
          if(!!row && row.CPF === verificarCPF(req.body.CPF)) {
              return  res.render(consultarUsuario, {
                title: "Consultar Usuário",
                links: linksInternosNavegacao,
                mensagem: "Usuário encontrado.",
                opcao: "/consultar",
                row
              })
          } else if (row === undefined) {
            return res.render(consultarUsuario, {
              title: "Consultar Usuário",
              links: linksInternosNavegacao,
              mensagem: "Usuário inexistente",
              opcao: "/consultar",
              row: ""
              })
          } else {
            return res.render(consultarUsuario, {
              title: "Consultar Usuário",
              links: linksInternosNavegacao,
              mensagem: `Erro no banco de dados: ${err}`,
              opcao: "/consultar",
              row: ""
            })
          }
        })
      }
    case "atualizar":
      if (!verificarCPF(req.body.CPF)) {
        return res.render(atualizarCadastro, {
          title: "Atualizar Usuário",
          links: linksInternosNavegacao,
          mensagem: `CPF incorreto. Seu cadastro não pôde ser atualizado.`,
          opcao: "/atualizar",
          row: ""
          })
      } else {
        return UsuariosCadastrados.selecionarUmUsuario(verificarCPF(req.body.CPF), (err, row) => {
          if (row === undefined) {
            return res.render(atualizarCadastro, {
              title: "Atualizar Usuário",
              links: linksInternosNavegacao,
              mensagem: "Usuário inexistente",
              opcao: "/atualizar",
              row: ""
              })
          } else {
            return res.render(atualizarCadastro, {
              title: "Atualiza Usuário",
              links: linksInternosNavegacao,
              mensagem: err ? `Erro no banco de dados: ${err}` : `Atualize os campos acima e os envie em seguida.`,
              opcao: "/atualizar",
              row
            })
          }
       })
      }
    case "deletar":
      if (!verificarCPF(req.body.CPF)) {
        return res.render(deletarUsuario, {
          title: "Deletar Usuário",
          links: linksInternosNavegacao,
          mensagem: `CPF incorreto. Seu cadastro não pôde ser excluído.`,
          opcao: "/deletar"
          })
      } else {
        return UsuariosCadastrados.selecionarUmUsuario(verificarCPF(req.body.CPF), (err, row) => {
          if(!!row && row.CPF === verificarCPF(req.body.CPF)) {
              return  UsuariosCadastrados.deletarUsuario(req.body.CPF, 
                res.render(deletarUsuario, {
                title: "Deletar Usuário",
                links: linksInternosNavegacao,
                mensagem: "Usuário excluído com sucesso",
                opcao: "/deletar"
              })
            )
          } else if (row === undefined) {
            return res.render(deletarUsuario, {
              title: "Deletar Usuário",
              links: linksInternosNavegacao,
              mensagem: "Usuário inexistente",
              opcao: "/deletar"
            })
          } else {
            return res.render(deletarUsuario, {
              title: "Deletar Usuário",
              links: linksInternosNavegacao,
              mensagem: `Erro no banco de dados: ${err}`,
              opcao: "/deletar"
            })
          }
        })
      } 
    default:
      res.render('<h1>Erro</h1>')
    //exibir página de erro
  }
}


