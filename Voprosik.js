const { EOL } = require("os")

const fs=require("fs").promises


class Voprosik{
  constructor(){
  }
async getVopros() {
  const chitka=(await fs.readFile(`${__dirname}/voprosiki.txt`, "utf-8")).split(EOL)

  const newChit=chitka.map(el=>el.split(EOL))
  console.log(newChit);
}
}
const vopr=new Voprosik
vopr.getVopros()
module.exports=Voprosik