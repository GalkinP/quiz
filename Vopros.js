const { EOL } = require("os")

const fs=require("fs").promises


class Voprosik{
  constructor(){
  }
async getVopros() {
  const chitka=(await fs.readFile(`${__dirname}/voprosiki.txt`, "utf-8")).split('\r\n\r\n')
  const newChit=chitka.map(el=>el.split(EOL))
  const objects =newChit.map(el =>{ const[message, name] = el; return {message,name, type: "input"}});
 return objects;
}
}

module.exports=Voprosik