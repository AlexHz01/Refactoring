class  ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const getAmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService