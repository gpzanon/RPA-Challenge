const { con, createTableSQL, addToDb } = require('./database')
const fetchURL = require('./submitForm')

con.connect(async err => {
    if (err) throw err
    console.log("Connected to database")
})

con.query(createTableSQL, err => {
    //Cria o banco e suas tabelas caso não existam
    if (err) throw err
    console.log("Database and tables successfully created")
    submitForm()
})

async function submitForm() {
    const contacts = await fetchURL('https://seguralta.com.br/site/contato')
    addToDatabase(contacts)
}

function addToDatabase(contacts) {
    //Divide o telefone em 2 items separados (ddd e telefone)
    let newContacts = []
    for (contact of contacts) {
        contact.ddd = contact.telefone.substring(1, 3)
        contact.telefone = contact.telefone.substring(4)
        newContacts.push(contact)
    }
    //Invoca a criação das querys de inserção com os dados dos contatos
    const insertSQL = addToDb(newContacts)
    //Executa as querys SQL de INSERT

    for (sql of insertSQL) {
        con.query(sql, err => {
            if (err) throw err
            console.log("Contacts successfully inserted into the database")
        })
    }
//Encerra a conexão
    con.end((err) => {
        if (err) throw err
    })
}