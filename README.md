# Quiz Interativo

Bem-vindo ao **Quiz Interativo**, um projeto desenvolvido para proporcionar uma experiência divertida e educativa através de quizzes interativos, com funcionalidades de ranking, integração com Firebase e um sistema de pontuação! 🏆

## 📌 Descrição

O **Quiz Interativo** é um jogo de perguntas e respostas no estilo de quiz onde os usuários podem testar seus conhecimentos em várias áreas. O projeto é baseado em **React.js** para o frontend e integra-se com o **Firebase** para armazenar dados como as perguntas, respostas e pontuações. 

Além disso, o projeto conta com funcionalidades como:
- **Ranking de Pontuação** para os jogadores mais rápidos e certeiros.
- **Persistência de Dados** com Firebase Firestore.
- **Interface intuitiva** com animações e gifs interativos.
- **Desafio de Desistir** com um botão de "desistir" e interação divertida para o usuário.

## 🚀 Funcionalidades

- **Tela Inicial**: A primeira tela exibe um botão para iniciar o quiz, e um ranking das pontuações anteriores.
- **Modo Quiz**: Ao iniciar o quiz, o usuário será desafiado com uma série de perguntas.
- **Botão de Desistir**: Caso o jogador desista, um popup engraçado aparecerá, desafiando o jogador a continuar ou aceitar que ele desiste fácil.
- **Ranking de Pontuação**: O jogador poderá ver suas melhores pontuações e compará-las com outras.
- **Respostas em Tempo Real**: O quiz calcula a pontuação conforme o jogador responde às perguntas corretamente ou incorretamente.

## 🔧 Tecnologias Usadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend**: 
  - React.js
  - React Router Dom (para navegação)
  - Firebase (para persistência de dados)
  - CSS e animações para interação visual
- **Backend**:
  - Firebase Firestore (banco de dados)
  - Firebase Authentication (para gerenciamento de usuários, se necessário)
  
## 📦 Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente.

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/quiz-interativo.git
cd quiz-interativo
```

### 2. Instalar as dependências

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

### 3. Configuração do Firebase

Antes de rodar o projeto, você precisa configurar o Firebase. Siga os passos:

  - Acesse Firebase Console
  - Crie um novo projeto e ative o Firestore
  - Copie suas credenciais de configuração do Firebase e crie um arquivo .env na raiz do projeto, com as variáveis:

```bash
REACT_APP_QUIZ_API_KEY=SuaAPIKey
REACT_APP_QUIZ_AUTH_DOMAIN=SeuAuthDomain
REACT_APP_QUIZ_PROJECT_ID=SeuProjectID
REACT_APP_QUIZ_STORAGE_BUCKET=SeuStorageBucket
REACT_APP_QUIZ_MESSAGING_SENDER_ID=SeuSenderID
REACT_APP_QUIZ_APP_ID=SeuAppID
```

### 4. Rodar o Projeto

Após configurar as variáveis de ambiente, execute o seguinte comando para rodar a aplicação:

```bash
npm start
```
