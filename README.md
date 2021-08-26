# Desafio RPA
## Requisitos
* Instale a versão Community do MySQL seguindo as instruções em https://www.mysqltutorial.org/install-mysql/
* Python 3 (https://www.python.org/downloads/)
* Bibliotecas Python `requests` e `mysql.connector`, instale usando o comando `python -m pip install requests mysql.connector`

## Uso
* Extraia os arquivos do aplicativo em um diretório
* Configure a conexão ao banco de dados editando o arquivo `config.json` com o usuário e a senha criados na instalação do servidor do MySQL
* Abra uma janela do prompt de comando neste diretório
* Execute o comando `python app.py`
Após a execução do programa o banco de dados será criado (caso ele não exista), os dados na planilha Contatos.csv serão lidos e enviados para o formulário via requisição HTML POST e o banco de dados será atualizado com os valores enviados no formulário.
