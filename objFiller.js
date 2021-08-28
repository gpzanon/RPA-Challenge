const states = require('./states')
const CsvReader = require('csv-reader')
const Fs = require('fs')

module.exports = async () => {
    //Promise para processar o arquivo Contatos.csv e transforma-lo em um array de objetos
    return new Promise((resolve, reject) => {
        contacts = []
        const InputStream = Fs.createReadStream('Contatos.csv', 'utf8')
        InputStream
            .pipe(new CsvReader({ delimiter: ';', asObject: true }))
            .on('data', (row) => {
                row.EstadoText = row.Estado
                row.Estado = states.uf.filter(obj => obj.name == row.Estado)[0].value // Transforma o Estado em seu 'value' correspondente para o envio do formulário
                const lowerCase = Object.fromEntries(                                 // Transforma as keys dos objetos em lowercase para seguir o padrão do envio do formulário
                    Object.entries(row).map(([k, v]) => [k.toLowerCase(), v])
                );
                contacts.push(lowerCase)
            })
            .on('end', () => {
                console.log("csv successfully read")
                resolve(contacts)
            })
            .on('error', err => reject("Error creating the CSV Based object", err))
    })
}