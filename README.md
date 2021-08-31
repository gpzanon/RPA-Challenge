# RPA-Challenge: Desenvolvedor RPA Junior

### *Etapa 1: criar o banco de dados de acordo com a modelagem*
*Utilize SQL Express ou MySQL para criação dessa estrutura*
*Esse banco de dados será utilizado para armazenar as informações que serão inseridos por meio do formulário (Etapa 2)*

***Tabela Pessoa** (Id PrimaryKey Identity, Nome VARCHAR 300, Cidade VARCHAR 300, Estado VARCHAR 150), ***Tabela Contato** (Id INT Primary Key Identity, Pessoa INT Foreign Key Tabela Pessoa, Email VARCHAR 150, DDD VARCHAR 3, Telefone VARCHAR 15), ***Tabela StatusMensagemEnviada** (Id INT Primary Key identity, Pessoa INT Foreign Key Tabela Pessoa, Contato INT Foreign Key Tabela Contato,Assunto VARCHAR 1000, MensagemEnviada VARCHAR MAX, RetornoSite VARCHAR MAX)*

### *Etapa 2: implementar solução para automatizar formulário*
*A implementação dessa solução poderá ser realizada na linguagem de programação que você tiver melhor afinidade*</br>
*Realize testes para ter certeza que o que está sendo entregue cumprirá o objetivo (automatizar formulário), antes do **pull request***</br>

*Utilize o arquivo CSV de [Contatos](https://github.com/gpzanon/RPA-Challenge/blob/main/Contatos.csv), para preencher o formulário já existente na página da Seguralta em [Fale com a Seguralta]( http://seguralta.com.br/site/contato). O solução deverá ser capaz de cadastrar automaticamente os contatos no formulário, sendo este o objetivo final desse desafio. As informações inseridas no formulário, bem como a mensagem de status obtida ao realizar o envio, deverão são persistidas no banco de dados criado na Etapa 1.*


### *Orientações:*
- ***Fork** no repositório (https://github.com/gpzanon/RPA-Challenge)*
- *Faça o desafio numa **branch** com o seu nome (exemplo:`nome-sobrenome`)*
- *Assim que concluir o seu desafio, abra um **pull request** com suas implementações/ alterações*
- *Deverão ser disponibilizados no GIT:*</br>
  *(a) Estrutura SQL utilizada para a criação do banco de dados criado (Etapa 1)*</br>
  *(b) O código-fonte do programa utilizado na automatização do formulário (Etapa 2)*</br>
  *(c) Orientação com o passo-a-passo para execução do código a partir de um arquivo README.md*

#### *Tempo de esforço previsto*:
- *Recomendamos dispensar até, no máximo 2 dias, nesse teste*

#### *O que será avaliado:*
- *Manutenabilidade, clareza e limpeza de código, resultado funcional, entre outros fatores*
- *O histórico no `Git` também será avaliado*
- *Se necessário explique as decisões técnicas tomadas, as escolhas por bibliotecas e ferrramentas*

#### *Diferenciais:*
- *Criar validações de erros, caso o dado não exista ou campo do formulário não existir*
- *Validações se os campos foram preenchidos corretamente*
- *Boa documentação de código e de serviços*</p>


##### *Em caso de dúvidas, envie um email para [Helder Donda](mailto:helder.dev@seguralta.com.br) ou [Aline Pappa](mailto:aline.dev@seguralta.com.br)*
*Um dos nossos pilares é a valorização das pessoas e temos orgulho de dizer que somos uma empresa que apoia a diversidade e inclusão. Sendo assim, consideramos todos os candidatos para as nossas oportunidades, independente de raça, cor, religião, gênero, identidade de gênero, nacionalidade, deficiência, ascendência ou idade.*

