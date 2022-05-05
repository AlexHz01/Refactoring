class  ExplorerService {

    static filterByMission(explorers, mission) {
        const filterExplorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        return filterExplorerByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const filterExplorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        const NumberOfExplorerByMission = filterExplorerByMission.map((explorer) => explorer.mission);
        return NumberOfExplorerByMission.length
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const filterExplorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        const ExplorersUserNames = filterExplorerByMission.map((explorers) => explorers.githubUsername);
        return ExplorersUserNames
    }

}

module.exports = ExplorerService