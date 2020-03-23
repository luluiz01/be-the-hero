const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) => {
    return resposta.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Luiz Henrique'
    });
});

app.listen(3333);