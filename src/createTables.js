async function createTables(records) {

  const database = require('./database/db')
  const Pessoa = require('./database/models/pessoa');
  const Contato = require('./database/models/contato');
  const StatusMensagemEnviada = require('./database/models/statatusMensagemEnviada');

  Contato.belongsTo(Pessoa, {
    constraint: true,
    foreignKey: 'idPessoa'
  });

  StatusMensagemEnviada.belongsTo(Pessoa, {
    constraint: true,
    foreignKey: 'idPessoa'
  });

  StatusMensagemEnviada.belongsTo(Contato, {
    constraint: true,
    foreignKey: 'idContato'
  });
  
  const resultado = await database.sync({ force: true });

  for await (const record of records) {
    try {
      const resultadoCreate = await Pessoa.create({
        nome: `${record.Nome}`,
        cidade: `${record.Cidade}`,
        estado: `${record.Estado}`
      })
      const idPessoa = resultadoCreate.id;

      const resultadoCreate2 = await Contato.create({
        email: `${record.Email}`,
        ddd: `${record.Telefone.substr(1,2)}`,
        telefone: `${record.Telefone.substr(4,9)}`,
        idPessoa: idPessoa
      })
      const idContato = resultadoCreate2.id;

      const resultadoCreate3 = await StatusMensagemEnviada.create({
        assunto: `${record.Assunto}`,
        mensagem: `${record.Mensagem}`,
        retorno: `${record.Retorno}`,
        idPessoa: idPessoa,
        idContato: idContato
      })

    } catch (error) {
      console.log(error);
    }

    await database.sync();
  }
}

module.exports.createTables = createTables;