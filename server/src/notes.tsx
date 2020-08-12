import express, { response } from 'express';

const app = express();

app.use(express.json()); // para usar json

// Rotas:
// http://localhost:3333/users
// http://localhost:3333/contacts

// Recursos:
// /users / contacts

// Métodos HTTP
// Get: Buscar ou listar uma informação
// POST: Criar alguma informação no backend
// Put: Atualizar uma informação existente
// Delete: Apagar informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.get('/users', (request, response ) => {
    console.log(request.query);
    const users = [
        { name: 'Gabriel', age: 23 },
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21 },
    ]
    return response.json(users)
})

app.post('/users', (request, response ) => {
    console.log(request.body);
    const users = [
        { name: 'Gabriel', age: 23 },
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21 },
    ]
    return response.json(users)
})

app.delete('/users/:id', (request, response ) => {
    console.log(request.params);
    const users = [
        { name: 'Gabriel', age: 23 },
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21 },
    ]
    return response.json(users)
})

app.listen(3333);