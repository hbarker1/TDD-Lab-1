// These test cases are all unfinished. We will finish them together.
'use stricted';

describe("tests for change-handler", function() {

    // Set up a test below...
    it("inserts coin and increases cash tendered", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler = new ChangeHandler({

            amountDue: 20
            
        });
        expect(changeHandler.insertCoin('penny')).toBe(1);
    });

});