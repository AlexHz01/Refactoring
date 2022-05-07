const FizzbuzService = require("./../../lib/services/FizzbuzzService");

describe("Test para Fizzbuzz Services", () =>{
    test("1. Verification", () =>{
        const explorer1 = {name: "Explorer1", score: 1 };
        const explorer3 = {name: "Explorer3", score: 3 };
        const explorer5 = {name: "Explorer5", score: 5 };
        const explorer30 = {name: "Explorer30", score: 30 };
        const assignTrick1 = FizzbuzService.applyValidationInExplorer(explorer1);
        const assignTrick3 = FizzbuzService.applyValidationInExplorer(explorer3);
        const assignTrick5 = FizzbuzService.applyValidationInExplorer(explorer5);
        const assignTrick15 = FizzbuzService.applyValidationInExplorer(explorer30);
        expect(assignTrick1).toEqual({name: "Explorer1", score: 1, trick: 1} );
        expect(assignTrick3).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"} );
        expect(assignTrick5).toEqual({name: "Explorer5", score: 5, trick: "BUZZ"} );
        expect(assignTrick15).toEqual({name: "Explorer30", score: 30, trick: "FIZZBUZZ"} );
    });
    test("2. Verificacion sin usuario", () => {
        const assignumber = FizzbuzService.applyValidationInNumber(5);
        expect(assignumber).toEqual("BUZZ");
    });
});


