#language: pt 
Funcionalidade: Cadastrar lista de contatos
- cadastrar contatos

@javascript 
Cenario: Cadastrar varios contatos
 Dado que acesso o cadastro de contatos
 E preencho os campos do formulário com dados válidos 
 Quando confirmo o cadastro
Então o sistema deve exibir a mensagem formulário, 'Contato enviado com sucesso'
     
Entao validar contatos 