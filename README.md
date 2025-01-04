## in.orbit - Sistema de Gerenciamento de Metas Semanais

**in.orbit** é um sistema para criar e controlar metas semanais, com um backend desenvolvido em Node.js utilizando o framework Fastify. A aplicação utiliza PostgreSQL como banco de dados, com o Drizzle ORM para manipulação de dados. O banco é gerenciado por Docker, permitindo fácil configuração e execução do ambiente.

### Funcionalidades

* **Cadastro de Novas Metas:** Os usuários podem criar novas metas semanais.
* **Barra de Progresso:** Acompanhe o progresso das metas em tempo real com uma barra de progresso dinâmica.
* **Listagem de Metas:** Exibe todas as metas cadastradas, junto com a data e o horário em que foram realizadas.

### Estrutura do Projeto

Este repositório está dividido em duas partes principais:

* **Backend:** Responsável por gerenciar as requisições, regras de negócio e interações com o banco de dados.
* **Frontend:** Responsável por consumir essa API e renderizar toda a parte de Interface e interação com o usuário.

### Tecnologias Utilizadas

* **Node.js** com **Fastify** para a construção do servidor.
* **Drizzle ORM** para a interação com o banco de dados.
* **PostgreSQL** como banco de dados relacional.
* **Docker** para a configuração do ambiente do banco de dados.

### Configuração do Ambiente

#### Pré-requisitos

* **Node.js**
* **Docker**
* **Docker Compose**

#### Configurando o Banco de Dados

1. **Criando a variável de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione a seguinte linha:

   ```bash
   DATABASE_URL=postgres://docker:docker@localhost:5432/inorbit
   ```

2. **Iniciando o banco de dados com Docker Compose:**
   Utilize o seguinte arquivo `docker-compose.yml`:

   ```yml
   name: pocket-js-server

   services:
     pg:
       image: bitnami/postgresql:13.16.0
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=docker
         - POSTGRES_PASSWORD=docker
         - POSTGRES_DB=inorbit
   ```

   Execute o comando para subir o banco de dados:

   ```bash
   docker-compose up -d
   ```

#### Executando a Aplicação

1. **Instalando as dependências:**
   Navegue até a pasta do backend e execute o seguinte comando:

   ```bash
   npm install
   ```

2. **Executando as migrações:**
   Para configurar as tabelas no banco de dados, execute:

   ```bash
   npm run migrate
   ```

3. **Iniciando o servidor:**
   Para rodar a aplicação localmente, execute:

   ```bash
   npm run dev
   ```

