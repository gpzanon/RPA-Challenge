Ambiente:
 
Tive dificuldades em fazer automação e testes com o banco dados.
Neste projeto foi feito a automação no front-end
     
    Ruby (versão utilizada para criação do projeto - 3.0.0.p201) com DevKit https://rubyinstaller.org/downloads/

    Bundler (gem install bundler)

    Chromedriver configurado no path: Obs.1: faça o download em https://chromedriver.chromium.org/downloads (baixar de acordo com a versão do seu Chrome), descompacte em uma pasta (ex.: C:\chromedriver) Obs.2: na variável de ambiente PATH, incluir o caminho para a pasta do chromedriver (ex.: C:\chromedriver - sem o chromedriver.exe) - pode ser necessário reiniciar o sistema

    IDE: VSCode --- Extensões úteis: vscode-icons Cucumber (Gherkin) Full Support Ruby

    Roteiro para UTILIZAR o projeto:

    Fazer o clone do projeto
    Abrir a pasta no VSCode
    Abrir o terminal (do VSCode, ou o da sua preferência e navegar até a pasta do projeto) e rodar o comando 'bundle install'
    Para rodar os cenários, utilizar o comando de run do Cucumber: ex.:

    rodar todos os cenários: 'cucumber'

    rodar uma feature: cucumber features/01-contato.feature

    rodar um cenário pela tag: cucumber -t 

    rodar todos os cenários por tag: cucumber -t @regressivo

  