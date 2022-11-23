import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
import UsuariosCadastrados from '../model/sqlUsuariosCadastro.js'
import verificarCPF from '../js/validarCPF.js'
const atualizarCadastro = path.resolve('.', 'view', 'atualizarCadastro.ejs')

export const updateDadosUsuario = (req, res) => {
    const CPF = verificarCPF(req.params.identificador)
    if (!!CPF && !!req.body.nome && !!req.body.telefone && !!req.body.email) {  
      return UsuariosCadastrados.atualizarUsuario(req.body.nome, req.body.telefone, req.body.email, CPF, (err) => {
        req.body.CPF = CPF
        return res.render(atualizarCadastro, {
          title: "Atualizar Usuário",
          links: linksInternosNavegacao,
          mensagem: "Dados atualizados com sucesso.",
          opcao: "/atualizar",
          row: req.body
        })
      })
  }
}