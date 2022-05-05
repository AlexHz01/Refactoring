const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para Explorer service", () =>{
    test("Requerimiento 1 y 2 para visualizar todos los explorers en el explores.json", () =>{
        const explorers = [{mission : "node"}, {mission : "java"}, {mission : "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "java")
        expect(explorersInNode.length).toBe(1);
    })

    test("Requerimiento 2 obtener el numero de usuario que es tan en node ", () => {
        const explorers = [{ githubUsername : "ajolonauta6", mission : "node"},{ githubUsername : "ajolonauta7",mission : "java"},{ githubUsername : "ajolonauta8", mission : "node"}]
        const nameUserInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "java")
        expect(nameUserInNode).toBe(1)
    })

    test("Requerimiento 3 obtener la lista de usuario que es tan en node ", () => {
        const explorers = [{ githubUsername : "ajolonauta6,", mission : "node"},{ githubUsername : "ajolonauta7,",mission : "java"},{ githubUsername : "ajolonauta8,",mission : "node"}]
        const nameUserInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "java")
        expect(nameUserInNode).toBe(1)
    })

})