class  ExplorerService {

    static filterByMission(explorers, mission) {
        const filterExplorerByMission = explorers.filter((explorers) => explorers.mission === mission);
        return filterExplorerByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const filterExplorerByMission = explorers.filter((explorers) => explorers.mission === mission);
        const NumberOfExplorerByMission = filterExplorerByMission.map((explorer) => explorer.mission);
        return NumberOfExplorerByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const filterExplorerByMissions = explorers.filter((explorers) => explorers.mission === mission);
        const ExplorersUserName = filterExplorerByMissions.map((explorers) => explorers.githubUsername);
        return ExplorersUserName;
    }

}

module.exports = ExplorerService;