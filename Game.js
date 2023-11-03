const inquirer = require("inquirer");
const InputName = require(`${__dirname}/InputName`);
const AllTheme = require(`${__dirname}/Model.js`);
let scoresEnd = ["очко", "очка", "очков"];
function sklonenie(number, txt) {
  const cases = [2, 0, 1, 1, 1, 2];
  return txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}

class Game {
  constructor() {
    this.name = undefined;
    this.score = 0;
  }
  async start() {
    let user = new InputName();
    let value = await user.inputName();
    this.name = value.username;
    console.log(`Приветствую ${this.name}`);
  }
  finish() {
    console.log(
      `${this.name}, вот и подошла к концу наша игра. Ты набрал ${this.score} ${sklonenie(this.score, scoresEnd)}.`
    );
  }
}
let newGame = new Game();
async function ask() {
  let arr = [];
  const d = new AllTheme();
  const theme = await d.getAllTheme();
  const answers = await d.getAnswers(theme);
  const que = await d.getQuestion(theme);
  return inquirer.prompt(que).then((answer) => {
    for (const key in answer) {
      arr.push(answer[key]);
    }
    //console.log(arr);
    answers.forEach((el, i) => {
      if (el === arr[i]) {
        newGame.score++;
      }
    });
  });
}

async function res() {
  await newGame.start();
  let arr = await ask();
  await newGame.finish();
}
res();
module.exports = Game;
