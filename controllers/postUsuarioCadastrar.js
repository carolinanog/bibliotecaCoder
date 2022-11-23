import path from 'path'
import verificarCPF from '../js/validarCPF.js'
import { linksPublicosNavegacao } from '../controllers/linksDaPagina.js'
import UsuariosCadastrados from '../model/sqlUsuariosCadastro.js'
const cadastrarUsuario = path.resolve('.', 'view', 'cadastrarUsuario.ejs')

export const usuarioCadastrar = (req, res) => {
    const { nome, CPF, telefone, email } = req.body;
    if (!verificarCPF(CPF)) {
        return res.render(cadastrarUsuario, {
            title: "Cadastrar Usuário",
            links: linksPublicosNavegacao,
            mensagem: `CPF incorreto. Seu cadastro não pôde ser concluído.`
            })
    } 
    UsuariosCadastrados.selecionarUmUsuario(verificarCPF(CPF), (err, row) => {
        if(!!row && row.CPF === verificarCPF(CPF)) {
            return res.render(cadastrarUsuario, {
            title: "Cadastrar Usuário",
            links: linksPublicosNavegacao,
            mensagem: `CPF já cadastrado.`
            })
        } else { UsuariosCadastrados.inserirUsuario(nome, verificarCPF(CPF), telefone.replace(/\D+/g, ""), email, (err) => {  
            if (err) {
                return res.render(cadastrarUsuario, {
                title: "Cadastrar Usuário",
                links: linksPublicosNavegacao,
                mensagem: `Erro no banco de dados: ${err}`
                })
            }
            res.render(cadastrarUsuario, {
                title: "Cadastrar Usuário",
                links: linksPublicosNavegacao,
                mensagem: `Olá ${nome}. Seu cadastro foi concluído.`
                })
            })
        }
    })
}