import path from 'path'
import express from 'express'
import { route } from './routes.js'

const app = express()

app.use(express.urlencoded({extended : true})) //URL com dados
app.use(express.static(path.resolve())) // Define uma pasta que disponibilizará os arquivos estáticos
app.set("view engine", "ejs");
app.use(route)
app.listen(2000, ()=>{
    console.log('Acessar http://localhost:2000/paginainicial')
})
