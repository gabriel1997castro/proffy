<a href="https://github.com/gabriel1997castro/proffy/edit/master/README_EN.md">Português</p>
<h1 align="center">
     Proffy
</h1>
<h2 align="center"> Node.js | ReactJS | React Native <h2>
<p align="center">
  <a href="#zap-about">About</a>&nbsp;|&nbsp;
  <a href="#gear-requerements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-run">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#camera-images">Images</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>
 
![Proffy](https://github.com/gabriel1997castro/proffy/blob/master/assets/cover.PNG?raw=true)

## :zap: About

**Proffy** is a platform developed during the Next Level Week #02, an event promoted by [RocketSeat](https://rocketseat.com.br/) and it had as tutor Diego Fernandes.
Some new features have been added.

The purpose of the plataform is to help connect students and teachers. 
On Proffy a teacher can register by entering their data, the subjects to teach and their schedule available to give the classes.
After the process of registering, the contact data of the teacher can appear inside the search page when someone search there.


## :gear: Requirements

-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)
-  [Typescript](https://www.typescriptlang.org/)

### Optional tools
The following tools are not required, but they can be helpful on test for example.
- [Insomnia](https://insomnia.rest/) - to do requests to the api
- [NVM](https://github.com/nvm-sh/nvm) - manage Node.js versions.
- [YARN](https://yarnpkg.com/) - alternative to NPM

## :rocket: Run
1. Clone repository

<pre><code>git clone https://github.com/gabriel1997castro/proffy</code></pre>

2. Install the dependencies of the application

<pre><code>
  # Proffy API
  $ cd server
  # Install the dependencies
  $ yarn # ou npm install
  # Configure database and create table.
  $ yarn knex:migrate # or npm run knex:migrate
  # Back to the principal folder
  # cd ..
  
  # Proffy web
  $ cd web
  # Install the dependencies
  $ yarn # ou npm install
  # Back to the principal folder
  # cd ..

  # Mobile app
  $ cd mobile
  # Install the dependencies
  $ yarn # ou npm install
</code></pre>

3. Run
     Open 3 terminal windows and type inside the server, mobile and web folders:
<pre><code>
     yarn start # ou npm start
</code></pre>

## :camera: Images

### Web

* Initial page
![Proffy initial page](https://github.com/gabriel1997castro/proffy/blob/master/assets/web1.PNG?raw=true)


* Page to search teachers
![Search](https://github.com/gabriel1997castro/proffy/blob/master/assets/web2.PNG?raw=true)


* Page to register
![Registering page](https://github.com/gabriel1997castro/proffy/blob/master/assets/web3.PNG?raw=true)

### Mobile
<div class="display=flex; justify-content=space-between;">
     <img src="./assets/mobile1.jpg" alt="Tela inicial" width="200" />
     <img src="./assets/mobile2.jpg" alt="Tela de pesquisa" width="200" />
     <img src="./assets/mobile3.jpg" alt="Professores disponíveis" width="200" />
     <img src="./assets/mobile4.jpg" alt="Professores favoritos" width="200" />
</div>


