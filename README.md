Teste Automatizado WEB com Cypress, Cucumber e PageObject
Certifique se o Passo 2 até o passo 4 já esteja ok caso não, siga eles normalmente. 

  1º Clone do projeto;
    Clone esse projeto em um diretorio da sua preferencia na sua maquina e abra em uma IDE de sua preferenfencia(Aqui utilizei o VS code).
  
  2º Instalação do Node.js e npm
    Com o projeto aberto em sua IDE abra o terminal caso não tenha abra o CMD e siga até a pasta onde clonou seu projeto;
    Certifique-se de que o Node.js esteja instalado no seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js: https://nodejs.org/.

  3º Instalando o Cypress
      Em seu terminal execute os seguintes comandos
      npm init -y
      npm install cypress --save-dev.

  4º Instalação do Cucumber e plugins Cypress
      npm install --save-dev cypress-cucumber-preprocessor cucumber.

  5º Entendendo a estrutura de pastas
      Criei uma "Folder" para Elementos nomeada como "elements" onde tem todos os elementos mapeados para o teste;
      Criei uma "Folder" para os Cenarios e casos de testes nomeada como "features";
      Criei uma "Folder" para os metodos nomeada como "page";
      Criei uma "Folder" para as ações da automação onde chamo os steps criados no arquivo .feature e agora unifico com os metodos e elementos, nomeada como "steps";
      Criei uma "Folder" "screenshots" para armazenar os print tirado automaticamente atraves do metodo screenshot do cypress;

  6º Execução dos testes
      Execute o seguinte comando para iniciar o Cypress
        npx cypress open.

        
