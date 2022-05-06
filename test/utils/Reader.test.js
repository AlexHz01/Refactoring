const Reader = require("./../../lib/utils/Reader");

describe("",() => {
    test("explorer.json", () =>{
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archiv
        expect(explorers).toEqual("Aqui va todo el file de explorers.json")
    })
})

