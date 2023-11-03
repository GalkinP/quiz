const inquirer = require('inquirer');
const {EOL} = require('os')
const fs  = require('fs').promises


class InputName {
  async inputName() {
    return await inquirer.prompt([{ name: "username", message: "Введите имя:" }]);
  }
}
module.exports = InputName;