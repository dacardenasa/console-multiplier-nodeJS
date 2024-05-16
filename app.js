const { createTable } = require("./helpers/createTable");
const { createFile } = require("./helpers/createFile");
const { base, list, until } = require("./config/yargs");

console.clear();

const fileName = `./output/table-${base}.txt`;

const output = createTable(base, list, until);
createFile(output, fileName)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
