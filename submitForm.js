const fetch = require('node-fetch')
const objFiller = require('./objFiller')


module.exports = async (formURL) => {
    const contacts = await objFiller() //Invoca o módulo objFiller.js que le o arquivo Contatos.csv e retorna um objeto com os valores obtidos
    let contactWithStatus = []
    for (contact of contacts) { //Faz um POST para cada objeto lido no arquivo .csv
        const response = await fetch(formURL, { 
            method: 'POST',
            body: JSON.stringify({ contact })
        })
        contact.status = response.status // Adiciona o status da resposta do envio aos objetos
        contactWithStatus.push(contact)
    }
    return contactWithStatus
}