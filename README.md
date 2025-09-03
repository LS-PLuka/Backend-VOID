# VOID Backend

API backend para o **e-commerce VOID**, um site e aplicativo de **loja de roupas streetwear**, construída com Node.js, Express, Prisma e MySQL.

Este backend segue o padrão de projeto **MVC (Model-View-Controller)**, fornecendo endpoints RESTful para gerenciar usuários, marcas, produtos e sacolas de compras.

---

## 🚀 Tecnologias e Dependências

* **Node.js** – Ambiente de execução do JavaScript no backend.
* **Express** – Framework para criação de APIs RESTful.
* **Prisma ORM** – ORM moderno para comunicação com o banco MySQL.
* **MySQL** – Banco de dados relacional.
* **Nodemon** – Reinicia o servidor automaticamente durante o desenvolvimento.

### Dependências do projeto

```json
"dependencies": {
  "@prisma/client": "^6.15.0",
  "express": "^5.1.0"
},
"devDependencies": {
  "nodemon": "^3.1.10",
  "prisma": "^6.15.0"
}
```

---

## ⚙ Estrutura do Projeto

```
backend-void/
│
├─ src/
│  ├─ controllers/       # Lógica dos endpoints
│  ├─ models/            # Models do Prisma
│  ├─ routers/           # Rotas da API
│  └─ server.js          # Arquivo principal
│
├─ prisma/
│  └─ schema.prisma      # Definição do banco de dados e geração do Prisma Client
│
├─ node_modules/
├─ package.json
└─ .env                  # Configurações do banco de dados
```

---

## 🛠 Configuração e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/LS-PLuka/Backend-VOID.git
cd Backend-VOID
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

* Crie um banco MySQL chamado `void` (ou qualquer nome).
* Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="mysql://root:senha@localhost:3306/void"
```

4. **Gere o Prisma Client:**

```bash
npx prisma generate
```

5. **Crie/atualize as tabelas no banco de dados:**

```bash
npx prisma db push
```

> ⚠️ Este comando sincroniza o schema do Prisma com o banco, **sem gerar migrations**.

6. **Inicie o servidor:**

```bash
npm run dev
```

* O servidor rodará em `http://localhost:3000` (ou a porta definida em `server.js`).

7. **Testando os endpoints:**

* Use ferramentas como **Postman** ou **Insomnia** para fazer requisições aos endpoints (GET, POST, PUT, DELETE).

---

## 📚 Referências

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Prisma ORM](https://www.prisma.io/)
* [MySQL](https://www.mysql.com/)
