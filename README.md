<h1 align="center">
     Proffy
</h1>
<h2 align="center"> Node.js | ReactJS | React Native <h2>
<p align="center">
  <a href="#zap-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#gear-dependências">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-executar">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :zap: Sobre

**Proffy** é uma plataforma desenvolvida durante a Next Level Week #02, evento promovido pela [RocketSeat](https://rocketseat.com.br/) e teve como tutor Diego Fernandes.
Algumas funcionalidades novas foram acrescentadas.

A plataforma foi feita para ajudar a conectar alunos com professores. 
Dentro da Proffy um professor pode se cadastrar colocando seus dados colocando as matérias que leciona assim com os dias e horários disponíveis.
Depois de ter cadastro efetuado cadastro seu dados de contato poderá aparecer na página de pesquisa que pode ser usada por um aluno.


## :gear: Dependências

-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)
-  [Typescript](https://www.typescriptlang.org/)

### Ferramentas opcionais
As ferramentas abaixo não são necessárias, mas podem ser úteis para testes por exemplo.
- [Insomnia](https://insomnia.rest/) - fazer requisições para testar a api
- [NVM](https://github.com/nvm-sh/nvm) - gerenciar versões do Node.js
- [YARN](https://yarnpkg.com/) - alternativa ao NPM

## :rocket: Como executar
1. Clonar repositório

<pre><code>git clone https://github.com/gabriel1997castro/proffy</code></pre>

2. Instalar dependências da aplicação

<pre><code>
  # Proffy API
  $ cd server
  # Instalar dependências
  $ yarn # ou npm install
  # Configurar o banco de dados e criar as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate
  # Voltar a pasta principal
  # cd ..
  
  # Proffy web
  $ cd web
  # Instalar as dependências
  $ yarn # ou npm install
  # Voltar a pasta principal
  # cd ..

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
</code></pre>

3. Executar
     Basta abrir 3 instâncias de terminal e digitar em cada um dos 3 diretórios:
<pre><code>
     yarn start # ou npm start
</code></pre>
