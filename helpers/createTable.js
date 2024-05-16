require("colors");

function createTable(base = 5, isListTableEnabled = false, until) {
  let output = "";
  let consoleOutput = "";

  for (let i = 1; i <= until; i++) {
    output += `${base} x ${i} = ${base * i}\n`;
    consoleOutput +=
      `${base} `.america +
      "x".grey +
      ` ${i}`.yellow +
      " = ".red +
      `${base * i}\n`.blue;
  }

  if (isListTableEnabled) {
    console.log("==================".red);
    console.log(`   Table of ${base}     `.bgWhite);
    console.log("==================".red);
    console.log(consoleOutput);
  }

  return output;
}

module.exports = {
  createTable
};
