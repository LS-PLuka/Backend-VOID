# VOID — Backend

API REST para o e-commerce VOID, uma loja de roupas streetwear.
Construída com Node.js e Express, seguindo o padrão MVC.

---

## Sobre

Fornece endpoints para gerenciar usuários, marcas, produtos e sacolas de compras,
servindo tanto o site quanto o aplicativo da VOID.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Node.js | Ambiente de execução |
| Express | Framework para APIs REST |
| Prisma ORM | Comunicação com o banco de dados |
| MySQL | Banco de dados relacional |

## Estrutura
```
backend-void/
├─ src/
│  ├─ controllers/       # Lógica dos endpoints
│  ├─ models/            # Models do Prisma
│  ├─ routers/           # Rotas da API
│  └─ server.js          # Entrada da aplicação
├─ prisma/
│  └─ schema.prisma      # Schema e geração do Prisma Client
├─ package.json
└─ .env                  # Variáveis de ambiente
```

## Como rodar
```bash
# Clone o repositório
git clone https://github.com/LS-PLuka/Backend-VOID.git
cd Backend-VOID

# Instale as dependências
npm install

# Configure o banco de dados
# Crie um arquivo .env na raiz com:
DATABASE_URL="mysql://root:senha@localhost:3306/void"

# Gere o Prisma Client e sincronize o banco
npx prisma generate
npx prisma db push

# Inicie o servidor
npm run dev
```

> O servidor sobe em `http://localhost:3000`. Use Postman ou Insomnia para testar os endpoints.
