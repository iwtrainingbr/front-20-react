# front-20
## App feito com REACT


### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/front-20-react`

### Instalando as dependencias
- `cd front-20-react`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist`

Execute no terminal:
```shell
npx json-server db.json --port 9000
```

### Executando a aplicação
Em outro terminal execute no terminal
```shell
npm start
```

### Instalando o Cypress (testes)
- `npm install cypress`

### Executando o Cypress (testes)
- `npx cypress open`
