<body>
<h2>#RPA-Challenge: Desenvolvedor RPA Junior </h2>
<h4>Etapa 1: criar o banco de dados de acordo com a seguinte modelagem</h4>
<h6>
Tabela Pessoa (Id PrimaryKey Identity, Nome VARCHAR 300, Cidade VARCHAR 300, Estado VARCHAR 150),</br>
Tabela Contato (Id INT Primary Key Identity, Pessoa INT Foreign Key tabela Pessoa, Email VARCHAR 150, DDD VARCHAR 3, Telefone VARCHAR 15),</br>
Tabela StatusMensagemEnviada (Id INT Primary Key identity, Pessoa INT Foreign Key tabela Pessoa, Contato INT Foreign KeyTabela Contato, Assunto VARCHAR 1000, MensagemEnviada VARCHAR MAX, RetornoSite VARCHAR MAX).
</h6>

<h4>Etapa 2: automatizar formulário</h4>
<h6>
A partir de um arquivo CSV (anexo nesse repositorio) contendo os dados abaixo, automatize a inserção de dados a partir da URL
http://seguralta.com.br/site/contato</p>

Nome; Cidade; Estado; CEP; Email; Telefone; Assunto; Mensagem</br>
Machado de Assis (Teste); SJR Preto; São Paulo; 15084220; ma@gmail.com; (17)981144461; Cotação; Preciso cotar seguro para veículo</br>
Tarsila do Amaral (Teste); Curitiba; Paraná; 81830190; tarsila.amaral@gmail.com; (41)996574545; Dúvida; Como encontro em contato com meu corretor?</br>
Monteiro Lobato (Teste); Brasília; Distrito Federal; 70722530; lobato@hotmail.com; (61)988241212; Sugestão; Buscar corretoras próximas a mim
</h6>

<h4>Etapa 3:  persistir dados no formulário no BD</h4>
<h6>
Coletar o retorno do status da mensagem enviada pelo formulário (Mensagem que o site mostra ao enviar o formulário, como, "Obrigado...").</br>
Persistir essa informação de status no banco de dados criado na Etapa 1.
</h6></p>

<h4>Orientações</h4>
<h6>
Fork no repositório GIT gpzanon/RPA-Challenge</br>
Faça o desafio numa branch com o seu nome (exemplo: nome-sobrenome)</br>
Assim que concluir o seu desafio, abra um pull request com suas alterações</br>
</h6>

<h4>O que será avaliado</h4>
<h6>
Manutenabilidade, clareza e limpeza de código, resultado funcional, entre outros fatores</br>
O histórico no GIT também está avaliado</br>
Se necessário explique as decisões técnicas tomadas, as escolhas por bibliotecas e ferrramentas</br>
</h6>

<h4>Diferenciais</h4>
<h6>
Criar validações de erros, caso o dado não exista ou campo do formulário não existir</br>
Validações se os campos foram preenchidos corretamente</br>
Boa documentação de código e de serviços</br>
</h6>
</font>
</body>
