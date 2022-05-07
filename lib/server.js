const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const {request, response} = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getsExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});
app.get("/v1/explorers/usernames/:mission" , (request, response) =>{
    const mission = request.params.mission;
    const explorerUserName = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission,    Users: explorerUserName});
    // response.json(explorerUserName)
});
app.get("/v1/fizzbuzz/:number", (request, response) =>{
    const number = request.params.number;
    const verification = ExplorerController.applyFizzbuzz(number);
    response.json ({score: request.params.number, trick : verification});

});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});