const { processFile } = require('./src/processFile');
const { rpa } = require('./src/rpa');
const { createTables } = require('./src/createTables');

(async () => {
  const records = await processFile();
  const recordsProcessed = [];

  for await (const record of records) {
    recordsProcessed.push(rpa(record));
  }

  await createTables(recordsProcessed);
})();
