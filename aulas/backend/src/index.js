const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP
 * GET: Busca/Listar umas informação no back-end
 * POST: Cria uma informação no back-end
 * PUT: Alturar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * Query Params: Parametros nomeados na rota após "?" (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Requent Body: Corpo da requisição, utilizado para criar ou alterar um usuário
 */


app.listen(3333);