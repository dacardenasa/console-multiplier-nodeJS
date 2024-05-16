const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "add the custom base to multiply"
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "add feature to show generated table"
  })
  .option("u", {
    alias: "until",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "add custom multiplier limit"
  })
  .check((argv) => {
    if (isNaN(argv.b) || isNaN(argv.u)) {
      throw `The base or until must be a number`;
    }
    return true;
  }).argv;

module.exports = argv;
