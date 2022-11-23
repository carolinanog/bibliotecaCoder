import path from 'path'
const sistemaLogin= path.resolve('.', 'view', 'login.ejs')

export const exibirSistemaLogin = (req, res) => {
    res.render(sistemaLogin, {
    title: "Acesso ao sistema interno",
    mensagem: ""
})}