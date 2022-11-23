import path from 'path'
import { linksInternosNavegacao } from './linksDaPagina.js'
const atualizarCadastrarUsuario = path.resolve('.', 'view', 'atualizarCadastrarUsuario.ejs')

export const atualizarDadosUsuario = (req, res) => {

    res.render(atualizarCadastrarUsuario, {
        title: "Atualizar Dados do Usuário",
        links: linksInternosNavegacao,
        mensagem: "",
        acao: ""
    })
}
