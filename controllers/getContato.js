import path from 'path';
import { linksPublicosNavegacao } from '../controllers/linksDaPagina.js';
const templateContato = path.resolve('.', 'view', 'contato.ejs');


export const exibirFaleConosco = (req, res) => {
    res.render(templateContato, {
        title: "Fale conosco!",
        links: linksPublicosNavegacao,
        mensagem: ""
    });
};