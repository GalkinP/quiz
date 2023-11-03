const fs = require("fs").promises;
const inquirer = require("inquirer");
var pokemonMe = require('pokemon-me')

class AllTheme {
  constructor(questions = [], answers = []) {
    this.questions = questions;
    this.answers = answers;
  }

  async getTheme() {
    const topics = (await fs.readdir(`${__dirname}/topics`, "utf-8")).map((el) => el.split("_")[0]);
    return topics;
  }
  async getQuestion(theme) {
    const data = await fs.readFile(`${__dirname}/topics/${theme}_flashcard_data.txt`, "utf-8");
    this.questions = data.split("\n").filter((el, i) => i % 2 === 0);
    this.answers = data.split("\n").filter((el, i) => i % 2 === 1);
    return this.questions.map((el, i) => ({
      name:` question${i}`,
      message: el,
      answer: this.answers[i],
      img: theme==="pokemon"?pokemonMe():" "
    }));
  }

  async getAnswers(theme) {
    const data = await fs.readFile(`${__dirname}/topics/${theme}_flashcard_data.txt`, "utf-8");
    this.answers = data.split("\n").filter((el, i) => i % 2 === 1);
    return this.answers;
  }

  async getAllTheme() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "th",
          value: "put",
          message: "Выбери тему",
          choices: [
            { name: "Покемоны", value: "pokemon" },
            { name: "Выдры", value: "otter" },
            { name: "Еноты", value: "raccoon" },
          ],
        },
      ])
      .then((answer) => {
        return answer.th;
      });
  }
}
module.exports = AllTheme;