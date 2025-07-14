## 🧪 Teste Prático Front-End – BeTalent  
**Desenvolvido por Yasmin Carvalho**

Bem-vindo(a) ao desafio técnico da BeTalent!  
O objetivo é construir uma interface responsiva que exiba uma tabela de colaboradores com dados de uma API simulada via `json-server`.

---

## 🎯 Desafio

Criar uma tabela responsiva com:

- Imagem do colaborador
- Nome
- Cargo
- Data de admissão
- Telefone

Funcionalidades incluídas:

- 🔍 Pesquisa por nome, cargo e telefone (com debounce)
- 🗓️ Formatação de datas e números
- 💻📱 Layout responsivo: versão desktop com `<table>` e mobile com `<details>`

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Yasnnie/teste-betalent.git
cd teste-betalent
```


### 2. Instalar as dependências
```bash
yarn install
# ou
npm install
```

### 3. Iniciar o JSON Server
```bash
npx json-server --watch db.json --port 3001
```

### 5. Configurar .env

Utilizar a URL do seu serviço ou do JSON Server

```.env
REACT_APP_API_URL=http://localhost:3001
```


### 5. Iniciar o JSON Server

```bash
yarn start
# ou
npm start
```

## 🛠️ Tecnologias utilizadas
- React + TypeScript
- SCSS Modules
- Axios
- json-server
- react-responsive
