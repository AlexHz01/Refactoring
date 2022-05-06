const fs = require("fs");

class Reader {
   static readJsonFile(Filepath){
       const rawdata = fs.readFileSync(Filepath);
       return JSON.parse(rawdata);
   }
}
module.exports = Reader