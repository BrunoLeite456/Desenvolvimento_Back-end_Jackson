# Personal Expenses API

## 1. Introdução

Este projeto tem como objetivo o desenvolvimento de uma API REST para o gerenciamento de despesas pessoais, utilizando a plataforma Node.js. A aplicação permite a realização de operações fundamentais de manipulação de dados, incluindo criação, consulta, atualização e exclusão de registros de despesas.

A solução foi projetada sem a utilização de sistemas gerenciadores de banco de dados, adotando como estratégia de persistência o armazenamento em arquivo JSON. Essa abordagem visa simplificar a arquitetura da aplicação, mantendo o foco nos conceitos essenciais de desenvolvimento backend, como organização em camadas, validação de dados e boas práticas na construção de APIs.

---

## 2. Tecnologias Utilizadas

O desenvolvimento da aplicação foi realizado com base nas seguintes tecnologias e ferramentas:

* Node.js, como ambiente de execução do JavaScript no servidor
* Express.js, utilizado para a criação e gerenciamento das rotas da API
* Módulo nativo "fs" (File System), empregado para leitura e escrita de arquivos
* Formato JSON, utilizado como meio de persistência de dados

---

## 3. Execução da Aplicação

### 3.1 Pré-requisitos

Para execução do projeto, é necessário que o ambiente possua o Node.js devidamente instalado.

### 3.2 Procedimento de execução

Inicialmente, deve-se acessar o diretório raiz do projeto por meio do terminal:

```bash id="c1a2b3"
cd personal-expenses-api
```

Em seguida, realizar a instalação das dependências necessárias:

```bash id="c4d5e6"
npm install
```

Após a instalação, a aplicação pode ser iniciada com o comando:

```bash id="c7f8g9"
npm start
```

Uma vez executada, a API estará disponível no seguinte endereço:

http://localhost:3000

---

## 4. Estrutura do Projeto

A aplicação foi organizada de forma modular, visando a separação de responsabilidades e maior clareza estrutural.

* O diretório "src" concentra o código-fonte da aplicação
* Em "src/data", encontra-se o arquivo "expenses.json", responsável pela persistência dos dados
* O diretório "src/models" contém a camada de lógica de negócio, implementada no arquivo "expenses.js"
* O arquivo "app.js" atua como ponto de entrada da aplicação, sendo responsável pela configuração do servidor e definição das rotas

---

## 5. Modelagem de Dados

A entidade central da aplicação é denominada "Expense", representando uma despesa individual.

Cada instância dessa entidade é composta pelos seguintes atributos:

* id: identificador único gerado automaticamente pelo sistema
* title: descrição textual da despesa, sendo um campo obrigatório
* amount: valor monetário da despesa, devendo ser um número maior que zero
* category: categoria associada à despesa
* date: data da despesa, representada no formato YYYY-MM-DD
* description: campo opcional destinado a informações adicionais
* createdAt: data e hora de criação do registro

---

## 6. Endpoints da API

A API disponibiliza um conjunto de endpoints REST para manipulação dos dados:

* GET /expenses
  Responsável por retornar a lista completa de despesas cadastradas

* GET /expenses/:id
  Permite a recuperação de uma despesa específica a partir de seu identificador

* POST /expenses
  Realiza a criação de uma nova despesa

* PUT /expenses/:id
  Atualiza os dados de uma despesa existente

* DELETE /expenses/:id
  Remove uma despesa previamente cadastrada

* GET /expenses/summary/total
  Calcula e retorna o valor total das despesas registradas

* GET /expenses/summary/category
  Retorna a soma das despesas agrupadas por categoria

---

## 7. Exemplos de Requisições

### 7.1 Criação de despesa

Requisição:

POST /expenses

```json id="req1"
{
  "title": "Supermercado",
  "amount": 150.50,
  "category": "Alimentação",
  "date": "2026-03-10",
  "description": "Compra semanal"
}
```

### 7.2 Resposta de sucesso

```json id="res1"
{
  "id": "exp_123456",
  "title": "Supermercado",
  "amount": 150.5,
  "category": "Alimentação",
  "date": "2026-03-10",
  "description": "Compra semanal",
  "createdAt": "2026-03-11T12:00:00.000Z"
}
```

### 7.3 Resposta de erro

```json id="res2"
{
  "error": "Amount must be greater than zero"
}
```

---

## 8. Regras de Negócio

A aplicação implementa as seguintes regras de validação:

* O atributo "title" deve obrigatoriamente ser informado
* O valor de "amount" deve ser maior que zero
* O campo "date" não pode representar uma data futura em relação ao momento da requisição
* O identificador "id" é gerado automaticamente pelo sistema
* Em casos onde a despesa solicitada não é encontrada, a API retorna resposta com status HTTP 404

---

## 9. Persistência de Dados

A persistência dos dados é realizada por meio do arquivo:

src/data/expenses.json

A aplicação utiliza o módulo "fs" para realizar operações de leitura e escrita nesse arquivo, simulando o comportamento de um banco de dados de forma simplificada.

---

## 10. Validação e Testes

A validação dos endpoints pode ser realizada por meio de ferramentas como Postman ou Insomnia.

Recomenda-se o seguinte fluxo de testes:

1. Inserção de uma nova despesa
2. Listagem das despesas cadastradas
3. Consulta de uma despesa específica
4. Atualização de dados
5. Remoção de registros

---

## 11. Considerações Finais

O desenvolvimento desta aplicação possibilitou a aplicação prática de conceitos fundamentais de desenvolvimento backend, incluindo a construção de APIs REST, manipulação de dados em formato JSON e organização modular de código.

Embora a solução não utilize banco de dados, a estrutura adotada permite futura evolução para integração com sistemas de persistência mais robustos, como bancos relacionais ou NoSQL.

---

## 12. Autor

Bruno Ricardo Leite
