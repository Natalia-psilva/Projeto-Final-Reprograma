# on-22-b3-projeto-final-Natalia
# Projeto CliniPhysio
## Natalia de Paiva da Silva||Ela/Dela|Curitiba-PR|26 anos|preta|cisgênero|Mãe do Noah
### CliniPhysio 
### **Contextualizando o Projeto** 

Olá, meu nome é Natalia e sou formada em Fisioterapia. Durante os dois anos em que trabalhei como fisioterapeuta, notei que a grande maioria das clínicas ainda utiliza papel como meio principal para registrar informações, o que resulta em um enorme volume de papel acumulado ao longo dos anos. De acordo com a Lei Geral de Proteção de Dados(LGPD), essas informações precisam ser armazenadas por até 5 anos. No entanto, essa abordagem não apenas gera desperdício, mas também é prejudicial ao meio ambiente, já que não contribui para a sustentabilidade.

Seria extremamente benéfico para todos adotarmos métodos mais sustentáveis de registro e armazenamento de informações clínicas. A transição para sistemas eletrônicos ou digitais permitiria reduzir significativamente a quantidade de papel utilizado, tornando o processo mais eficiente e ecologicamente correto.

Além disso, a mudança para uma abordagem digital traria diversos benefícios adicionais, como facilidade de acesso aos registros, maior segurança e privacidade das informações dos pacientes, além de facilitar a colaboração entre profissionais de saúde.

Portanto, como profissionais da área da saúde, devemos buscar alternativas mais sustentáveis e conscientes para garantir que possamos fornecer cuidados de qualidade enquanto protegemos o meio ambiente para as gerações futuras. Vamos trabalhar juntos para promover práticas responsáveis e alinhadas com os valores de preservação do nosso planeta.

### 👩🏽‍💻 **Apresentação** 
 Este é o projeto de conclusão do bootcamp de back-end da Turma On22 da [{Reprograma}](https://www.reprograma.com.br/).

 
Apresento-lhe uma poderosa API com um CRUD completo, estreitamente integrada ao banco de dados MongoDB Atlas. Sua finalidade primordial consiste em gerenciar cadastros de Pacientes e Fisioterapeutas, associados a Clínicas de Fisioterapia, proporcionando um acesso ágil às informações e a manipulação eficiente desses dados.

Com essa API, é possível realizar as operações básicas de criação, leitura, atualização e exclusão de registros de forma descomplicada, garantindo um controle completo sobre as informações cadastradas. O banco de dados MongoDB Atlas, conhecido por sua escalabilidade e confiabilidade, oferece um ambiente seguro para o armazenamento dos dados, assegurando a integridade e a privacidade das informações.

Essa solução se destaca por sua eficiência e simplicidade de uso, tornando a tarefa de gerenciamento de pacientes, fisioterapeutas e clínicas uma experiência ágil e intuitiva. Com acesso facilitado às informações, profissionais da saúde poderão focar em seu trabalho, assegurando atendimentos qualificados e proporcionando uma experiência mais satisfatória aos pacientes.

Em resumo, essa API se apresenta como uma ferramenta indispensável para otimizar os processos de gestão de dados em clínicas de fisioterapia, simplificando a administração e contribuindo para a excelência no atendimento e acompanhamento dos pacientes

 ### ✨ **Funcionalidades**

### **Para os Pacientes**
_________________________________________

✔️ Listar todos os pacientes

✔️ Visualizar um paciente pelo nome

✔️ Adicionar um novo paciente

✔️ Atualizar os dados do paciente pelo ID

✔️ Remover um paciente pelo ID

### **Para os(as) Fisioterapeutas**
_________________________________________
✔️ Listar todos os fisioterapeutas

✔️ Visualizar um fisioterapeuta pelo nome

✔️ Adicionar um novo fisioterapeuta

✔️ Atualizar os dados do fisioterapeuta pelo ID

✔️ Remover um fisioterapeuta pelo ID

________________________________________
### 🏗️ **Arquitetura MVC**
________________________________________

```
  📁 CliniPhysio_API   
  |       
  |-  📁 node_modules
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📁 src  
  |    |- 📁 Database  
  |         |- 📄 dbConnect.js    
  |    |- 📁 controllers   
            |- 📄 patientsControllers.js 
  |         |- 📄 physiotherapistControllers.js     
  |    |- 📁 models  
            |- 📄 patientsModel.js
  |         |- 📄 physiotherapistModel.js  
  |    |- 📁 routes  
            |- 📄 patientsRoutes.js
  |         |- 📄 physiotherapistRoutes.js     
  |         
  |    |- 📄 app.js  
  |-  📁 swagger
  |         |- 📄 swaggwr_output.js 
  |-  📁 test 
  |         |- 📄 patients.test.js 
  |         |- 📄 physiotherapist.test.js        
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 server.js
  |-  📄 swagger.js 
  |-  📄 README.md 
  ```
<br>

  ### 📦 **Dependências e Tecnologias**

<br>

**Base do projeto**
______________________________
```
Controle de versões: 
Git/GitHub

Editor de código - IDE:
VSCode

Desenvolver o back-end em Javascript:
Nodejs
```
 
**Instalações iniciais**
_______________________________________

```
Package.json em JS:
npm init -y

Express, cors e node_modules:
npm i express cors --save
versão
├── express@4.18.2
├── cors@2.8.5

Nodemon:
npm i -D nodemon
versão
├── nodemon@3.0.1
```

**Banco de dados**
___________________________________________________
```
Mongoose:
npm i mongoose
versão
├── mongoose@7.3.2
```
**Variaveis de ambiente**
____________________________________________________
```
Dotenv:
npm i dotenv
versão
├── dotenv@16.3.1
```

**Testes**
____________________________________________________
```
Jest:
npm install --save jest
versão
├── jest@29.6.1
```

**Documentação**
______________________________________________________
```
Swagger:
npm i swagger-autogen swagger-ui-express
versão
├── swagger-autogen@2.23.5
└── swagger-ui-express@5.0.0
```
<br>

## 🔒 **Variáveis de Ambiente**

<br>

*Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env*
```
`DB_PORT=NUMERO_PORTA`    
`DATABASE_URI=CONEXÃO_COM_MONGO_SEM_ASPAS` 
```
<br>

### 📌 **Rotas - EndPoint**

<br>

 📢 Todas as rotas existentes neste projeto:

- Pacientes

| Verbo  |   EndPoint       |        Descrição da Rota                   | Status | 
| ------ | ---------------  | -------------------------------------------| ------ |
| GET    | /all             | Listar todos os pacientes                  |   200  | 
| GET    | /name            | Lista um paciente específico               |   200  | 
| POST   | /add             | Adiciona um paciente                       |   201  | 
| PATCH  | /update/:id      | Altera um paciente                         |   200  | 
| DELETE | /:id             | Remove um paciente                         |   200  |  
<br>
- Fisioterapeutas


| Verbo  |   EndPoint       |        Descrição da Rota                   | Status | 
| ------ | ---------------  | -------------------------------------------| ------ |
| GET    | /all             | Listar todos os fisioterapeutas            |   200  | 
| GET    | /name            | Lista um fisioterapeutas específico        |   200  | 
| POST   | /add             | Adiciona um fisioterapeuta                 |   201  | 
| PATCH  | /update/:id      | Altera um fisioterapeuta                   |   200  | 
| DELETE | /:id             | Remove um fisioterapeuta                   |   200  |  
<br>


### 📚 **Documentação da API**
________________________________________________________________________________

📝[Swagger](http://localhost:1515/minha-rota-de-documentacao/)

### 📚 **Hospedagem da API**
________________________________________________________________________________

📝[render](https://cliniphysioapi.onrender.com)


### ✨ **Instalação e Contribuição no projeto** 
________________________________________________________________
1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas alterações: `git push origin minha-branch`

<br>

### 🗺️ **Referências**
_________________________________________________________
- [Emojis](https://emojipedia.org/)
---------------------------------------------------------

### ❤️ Agradecimentos
Agradeço a {Reprograma} por todo aprendizado conquistado até aqui, podemos dizer que saí do zero e em quatro meses consegui construir minha primeira API, Gratidão! 
Agradecimento especial ao meu marido e ao meu filho, que com apenas 2 anos, acompanhou as aulas comigo (conveniente não?já que o mercado de trabalho exige de um programador júnior 20 anos de experiência🤣🤣🤣)
