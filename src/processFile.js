const parse = require('csv-parse');
const fs = require('fs');

async function processFile() {
  records = []
  const parser = fs
    .createReadStream(`./utils/contatos.csv`)
    .pipe(parse({
      // CSV options if any
      delimiter: ";",
      columns: true
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record)
    //CHAMADA RPA
  }
  return records
}

module.exports.processFile = processFile;