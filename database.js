const mysql = require('mysql')

//Criando conexão com o banco 
const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	multipleStatements: true //Permite a execução de querys em multiplas linhas
})

//Gerando tabelas definidas no README
const createTableSQL = `
CREATE DATABASE IF NOT EXISTS challenge;
USE challenge;

 CREATE TABLE IF NOT EXISTS Tbl_pessoa (
	 Id INT NOT NULL AUTO_INCREMENT,
	 Nome VARCHAR(300),
	 Cidade VARCHAR(300),
	 Estado VARCHAR(150),
	 PRIMARY KEY (Id)
 );

CREATE TABLE IF NOT EXISTS Tbl_contato (
	Id INT NOT NULL AUTO_INCREMENT,
	Pessoa_id INT,
	Email VARCHAR(150),
	DDD VARCHAR(3),
	Telefone VARCHAR(15),
	PRIMARY KEY (Id),
	FOREIGN KEY(Pessoa_id) REFERENCES Tbl_pessoa(Id)
);

CREATE TABLE IF NOT EXISTS Tbl_StatusMensagemEnviada (
	Id INT NOT NULL AUTO_INCREMENT,
	Pessoa_id INT,
	Contato_id INT,
	Assunto VARCHAR(1000),
	MensagemEnviada TEXT,
	RetornoSite TEXT,
	PRIMARY KEY (Id),
	FOREIGN KEY(Pessoa_id) REFERENCES Tbl_pessoa(Id),
	FOREIGN KEY(Contato_id) REFERENCES Tbl_contato(Id)
);
`
function addToDb(contacts) {
	let sqlInserts = []
	for (contact of contacts) {
		sqlInserts.push(`
		USE challenge;
		INSERT INTO Tbl_pessoa(Nome, Cidade, Estado)
			VALUES ('${contact.nome}', '${contact.cidade}', '${contact.estadotext}');
			
		SET @temp_pessoa_id = (SELECT LAST_INSERT_ID());

		INSERT INTO Tbl_contato(Pessoa_id, Email, DDD, Telefone)
			VALUES (@temp_pessoa_id, '${contact.email}', '${contact.ddd}', '${contact.telefone}');

		SET @temp_contato_id = (SELECT LAST_INSERT_ID());

		INSERT INTO Tbl_StatusMensagemEnviada (Pessoa_id, Contato_id, Assunto, MensagemEnviada, RetornoSite)
			VALUES (@temp_pessoa_id, @temp_contato_id, '${contact.assunto}', '${contact.mensagem}', 'HTTP: ${contact.status}');
		`)
	}
	return sqlInserts
}
// Os atributos de Assunto e Mensagem enviada foram definidos para TEXT, já que MYSQL não permite o uso de VARCHAR(MAX)

module.exports = { con, createTableSQL, addToDb }