const FizzbuzService = require("./../../lib/services/FizzbuzzService")

describe("Test para Fizzbuzz Services", () =>{
    test("Verification", () =>{
        const explorer1 = {name: "Explorer1", score: 1 };
        const explorer3 = {name: "Explorer3", score: 3 };
        const explorer5 = {name: "Explorer5", score: 5 };
        const explorer15 = {name: "Explorer15", score: 30 };
        const assignTrick1 = FizzbuzService.applyValidationInExplorer(explorer1)
        const assignTrick3 = FizzbuzService.applyValidationInExplorer(explorer3)
        const assignTrick5 = FizzbuzService.applyValidationInExplorer(explorer5)
        const assignTrick15 = FizzbuzService.applyValidationInExplorer(explorer15)
        expect(assignTrick1).toEqual({name: "Explorer1", score: 1, trick: 1} );
        expect(assignTrick3).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"} );
        expect(assignTrick5).toEqual({name: "Explorer5", score: 5, trick: "BUZZ"} );
        expect(assignTrick15).toEqual({name: "Explorer15", score: 30, trick: "FIZZBUZZ"} );
    })
})