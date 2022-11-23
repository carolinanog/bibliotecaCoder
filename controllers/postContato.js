import path from 'path';
import { linksPublicosNavegacao } from '../controllers/linksDaPagina.js';
import Contato from '../model/sqlContato.js';
const templateContato = path.resolve('.', 'view', 'contato.ejs');
const templateErro = path.resolve('.', 'view', 'erro.ejs');


export const faleConosco = (req, res) => {
    const {nome, email, mensagem} = req.body;
    Contato.receberContato (nome, email, mensagem, (err, cont) => {
        if(err) {
        return res.render(templateErro, {
            title: "Erro!",
            links: linksPublicosNavegacao,
            mensagem: "Houve um erro na aplicação, por favor, tente novamente!"
        });
        }
        res.render(templateContato, {
            title: "Fale conosco!",
            links: linksPublicosNavegacao,
            mensagem: "Agradecemos o seu contato!"
        });
    });
};