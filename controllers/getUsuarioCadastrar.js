import path from 'path'
import { linksPublicosNavegacao } from './linksDaPagina.js'
const cadastrarUsuario = path.resolve('.', 'view', 'cadastrarUsuario.ejs')

export const paginaUsuarioCadastrar = (req, res) => {

    res.render(cadastrarUsuario, {
        title: "Cadastrar Usuário",
        links: linksPublicosNavegacao,
        mensagem: ""
      })
}
