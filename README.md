# To do CRUD Back-end

## Description

O projeto desenvolvido é um C.R.U.D. de tarefas (To do list), essa API possui toda a lógica de criação de usuário, login e criação de tarefas.

## Iniciando a aplicação

### Dependencias usadas

* express
* jsonwebtoken
* mongoose
* md5
* dotenv

### Dependencias de desenvolvimento usadas
* chai
* chai-http
* eslint
* mocha
* nodemon
* nyc

### Clone o repositório

* `git clone git@github.com:matheustkaczyk/trybe-case-todo-backend.git`
* `cd trybe-case-todo-backend`

### Executando o programa

* `npm install`
Instala todas as dependências necessárias para rodar o projeto

* `npm start`
Inicia a API

### Executando os testes

* `npm test`
Executa os testes de integração

# Rotas

## Usuário

### POST '/user'
Cria um usuário no banco de dados

Payload
* `{ "username": "João teste", "password": "teste123" }` 

### Resposta

`
  {
      "message": "User successfuly created"
  }
`
### POST '/login'
Efetua o login do usuário

Payload
* `{ "username": "João teste", "password": "teste123" }` 

### Resposta
`
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjBlNDkzMWJmOWZiNzc5NTk5MTkwMDkiLCJ1c2VybmFtZSI6InRlc3RlIiwicGFzc3dvcmQiOiJ0ZXN0ZTEyMyIsImlhdCI6MTY0NTEwMzYxNSwiZXhwIjoxNjQ1NzA4NDE1fQ.VaXPGBnMHOi_aBu52jjwAaa6U4k7kbX7cIeK27Lkyck"
}
`

## Tarefas
É necessário o token na chave `authorization` no header

### POST '/todo'
Cria uma nova tarefa

Payload
* `{ "description": "Estudar" }`

### Resposta
`
{
    "message": "Task successfully created"
}
`

### PUT '/todo/:id'
Atualiza uma tarefa

Payload
* `{ "description": "Codar", "status": "Em progresso" }`

### Resposta
`
{
    "message": "Task successfully updated"
}
`

