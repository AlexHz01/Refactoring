const ExplorerControllerTest = require("./../../lib/controllers/ExplorerController");

describe("Pruebas de Controller Explorer", () => {
    test("Prueba 1", () =>{
        const mission =  ExplorerControllerTest.getExplorersUsernamesByMission("java");
        expect(mission).toEqual(["ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10"]);
    });
});

