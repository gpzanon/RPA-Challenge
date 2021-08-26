#!/usr/bin/env python3
import mysql.connector
import configmanager
from mysql.connector import errorcode

config = configmanager.load_config()


TABLES = {}

TABLES['pessoa'] = (
    "CREATE TABLE `pessoa` ("
    "  `id` int(11) NOT NULL AUTO_INCREMENT,"
    "  `nome` varchar(300) NOT NULL,"
    "  `cidade` varchar(300) NOT NULL,"
    "  `estado` varchar(150) NOT NULL,"
    "  PRIMARY KEY (`id`)"
    ") ENGINE=InnoDB")

TABLES['contato'] = (
    "CREATE TABLE `contato` ("
    "  `id` int(11) NOT NULL AUTO_INCREMENT,"
    "  `pessoa` int(11) NOT NULL,"
    "  `email` varchar(150) NOT NULL,"
    "  `ddd` varchar(3) NOT NULL,"
    "  `telefone` varchar(15) NOT NULL,"
    "  PRIMARY KEY (`id`),"
    "  CONSTRAINT `contato_ibfk_1` FOREIGN KEY (`pessoa`) "
    "     REFERENCES `pessoa` (`id`) ON DELETE CASCADE"
    ") ENGINE=InnoDB")

TABLES['status_mensagem_enviada'] = (
    "CREATE TABLE `status_mensagem_enviada` ("
    "  `id` int(11) NOT NULL AUTO_INCREMENT,"
    "  `pessoa` int(11) NOT NULL,"
    "  `contato` int(11) NOT NULL,"
    "  `assunto` varchar(1000) NOT NULL,"
    "  `mensagem_enviada` varchar(20000) NOT NULL,"
    "  `retorno_site` varchar(20000) NOT NULL"
    "  PRIMARY KEY (`id`),"
    "  CONSTRAINT `status_mensagem_enviada_ibfk_1` FOREIGN KEY (`pessoa`) "
    "     REFERENCES `pessoa` (`id`) ON DELETE CASCADE,"
    "  CONSTRAINT `status_mensagem_enviada_ibfk_2` FOREIGN KEY (`contato`) "
    "     REFERENCES `contato` (`id`) ON DELETE CASCADE"
    ") ENGINE=InnoDB")


def load_db_cursor():
    conn = config['connection']
    try:
        cnx = mysql.connector.connect(
            host=conn['host'],
            user=conn['user'],
            password=conn['password'],
            database=conn['database']
        )
        return cnx.cursor()
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Usuário ou senha inválido(s)!")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print('Banco de dados "' + conn['database'] + '" não encontrado. Criando-o...')
            create_database()
            load_db_cursor()
        else:
            print(err)


def create_database():
    conn = config['connection']
    try:
        cnx = mysql.connector.connect(
            host=conn['host'],
            user=conn['user'],
            password=conn['password']
        )
        cursor = cnx.cursor()
        try:
            cursor.execute("CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format(conn['database']));
        except mysql.connector.Error as err:
            print('Erro na criação do banco de dados: {}'.format(err))
            exit(1)
        cursor.execute('USE {}'.format(conn['database']))
        for table_name in TABLES:
            table_description = TABLES[table_name]
            try:
                print('Criando tabela {}: '.format(table_name, end=''))
                cursor.execute(table_description)
            except mysql.connector.Error as err:
                if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                    print('Tabela já existe.')
                else:
                    print(err.msg)
            else:
                print('OK')
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Usuário ou senha inválido(s)!")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print('Banco de dados "' + conn['database'] + '" não encontrado. Criando-o...')
            create_database()
            load_db_cursor()
        else:
            print(err)

        
    except mysql.connector.Error as err:
        print(err)


cursor = load_db_cursor()


def commit_form_data(data):
    add_pessoa = ("INSERT INTO pessoa "
                  "(nome, cidade, estado) "
                  "VALUES (%s, %s, %s)")
    add_contato = ("INSERT INTO contato "
                   "(pessoa, email, ddd, telefone) "
                   "VALUES (%s, %s, %s, %s)")
    add_mensagem = ("INSERT INTO status_mensagem_enviada "
                    "(pessoa, contato, assunto, mensagem_enviada, retorno_site) "
                    "VALUES (%s, %s, %s, %s, %s)")
    
    data_pessoa = (data['nome'], data['cidade'], data['estado'])