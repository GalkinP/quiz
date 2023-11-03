const inquirer = require('inquirer');
const {EOL} = require('os')
const fs  = require('fs').promises


class Start{
async startNAme(){
    return   await inquirer.prompt([{type: 'input', name: 'username', messege: 'Введите'}])
}

}
// const ff = new Start
// ff.startNAme()


module.exports = Start; 