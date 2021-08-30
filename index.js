const { processFile } = require('./src/processFile');
const { rpa } = require('./src/rpa');
const { createTables } = require('./src/database/createTables');

(async () => {
  const records = await processFile();

  for await (const record of records) {
    rpa(record);
  }

  await createTables(records);
})();
