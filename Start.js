const inquirer = require('inquirer');
const {EOL} = require('os')
const fs  = require('fs').promises


class Start{
async startNAme(){
    return   await inquirer.prompt([{type: 'input', name: 'username', messege: 'Введите'}])
}

}
const ff = new Start
ff.startNAme()


module.exports = Start; 




// class InputName {
//   async inputName() {
//     return await inquirer.prompt([{ name: "username", message: "Введи имя:" }]);
//   }
// }
// module.exports = InputName;