const ExplorerServices = require ("../services/ExplorerService");
const FizzbuzzServices = require ("../services/FizzbuzzService");
const Reader = require ("../utils/Reader");


class ExplorerController {

    static getExplorersByMission (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.filterByMission(explorers, mission);
    }

    static getsExplorersAmountByMission (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getAmountOfExplorersByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getExplorersUsernamesByMission(explorers, mission);
    }
    static applyFizzbuzz (number){
        return FizzbuzzServices.applyValidationInNumber(number);
    }
    static getStackByExplorer (stack){
        const explorer = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getStackExplorer(explorer, stack);
    }



}

module.exports = ExplorerController;