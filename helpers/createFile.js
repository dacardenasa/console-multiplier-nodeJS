const fs = require("fs");

async function createFile(data = "", fileName = "") {
  try {
    fs.writeFileSync(fileName, data);
    return `${fileName} created successfully`.green;
  } catch (e) {
    return `"error: ${e}`.red;
  }
}

module.exports = {
  createFile
};
