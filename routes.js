import express from 'express'
import { paginaUsuarioCadastrar } from './controllers/getUsuarioCadastrar.js'
import { usuarioCadastrar } from './controllers/postUsuarioCadastrar.js'
import { exibirPaginaInicial } from './controllers/getPaginaInicial.js'
import { exibirSistemaInterno } from './controllers/getSistemaInterno.js'
import { exibirLivros } from './controllers/postAcervoDeLivros.js'
import { consultarLivros } from './controllers/getAcervoDeLivros.js'
import { atualizarDadosUsuario } from './controllers/getAtualizarUsuarioCadastrar.js'//--
import { opcaoAtualizarDadosUsuario } from './controllers/postAtualizarUsuarioCadastrar.js'//--
import { acaoOpcaoAtualizarDadosUsuario } from './controllers/postAcaoAtualizarUsuarioCadastrar.js'//--
import { updateDadosUsuario } from './controllers/postAtualizarUsuario.js'
import { exibirBibliotecarios } from './controllers/getBibliotecarios.js'       
import { exibirDetalhes } from './controllers/getDetalhesLivro.js'
import { exibirSistemaLogin } from './controllers/getLogin.js'
import { verificarLogin } from './controllers/postVerificarLogin.js'
import { exibirFaleConosco } from './controllers/getContato.js'
import { faleConosco } from './controllers/postContato.js'
import { atualizarDadosAcervo } from './controllers/getAtualizarAcervo.js'
import { inserirISBNpDel } from './controllers/getDeletarAcervo.js'
import { deletarLivroAcervo } from './controllers/postDeletarAcervo.js'
import { inserirLivroAcervo } from './controllers/getInserirAcervo.js'
import { adicionarAcervo } from './controllers/postInserirAcervo.js'
import { atualizarDadosLivro } from './controllers/getAtualizarDadosLivro.js'
import { recebeISBNAtualizar } from './controllers/postAtualizarDadosLivro.js'
import { atualizarLivroFinal } from './controllers/postAtualizarLivroFinal.js'
export const route = express.Router();
route.get("/atualizardadosacervo/inserir", inserirLivroAcervo); 
route.post("/atualizardadosacervo/inserir", adicionarAcervo);
route.get("/atualizardadosacervo/deletar", inserirISBNpDel); 
route.post("/atualizardadosacervo/deletar", deletarLivroAcervo);
route.get("/atualizardadosacervo", atualizarDadosAcervo);
route.get("/atualizardadosacervo/alterar", atualizarDadosLivro); 
route.post("/atualizardadosacervo/alterar", recebeISBNAtualizar); 
route.post("/atualizardadosacervo/alterar/:isbn", atualizarLivroFinal)
route.get('/paginainicial', exibirPaginaInicial)
route.get('/sistemainterno', exibirSistemaInterno) 
route.get("/bibliotecarios", exibirBibliotecarios)
route.get("/sistemalogin", exibirSistemaLogin)
route.post("/sistemalogin", verificarLogin)
route.get('/cadastrarusuario', paginaUsuarioCadastrar)
route.post('/cadastrarusuario', usuarioCadastrar)
route.get("/contato", exibirFaleConosco);
route.post("/contato", faleConosco);
route.get('/atualizardadosdousuario', atualizarDadosUsuario) 
route.get('/atualizardadosdousuario/:acao', opcaoAtualizarDadosUsuario)
route.post('/atualizardadosdousuario/:acao', acaoOpcaoAtualizarDadosUsuario) 
route.post('/atualizardadosdousuario/:acao/:identificador', updateDadosUsuario)
route.get('/acervodelivros', consultarLivros) 
route.get('/acervodelivros/categoria/:categoria', exibirLivros)
route.get("/acervodelivros/livro/:isbn", exibirDetalhes);