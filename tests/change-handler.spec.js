// These test cases are all unfinished. We will finish them together.
'use strict';

describe("tests for change-handler", function() {

    // Set up a test below...
    it("inserts coin and increases cash tendered", function() {
        // Remember, you can arrange, act, and assert...start small
        let changeHandler = new ChangeHandler ({
            amountDue: 10,
             cashTendered: 2
        });
        expect(changeHandler.insertCoin('penny')).toBe(1);
        expect(changeHandler.insertCoin('dime')).toBe(10);
        expect(changeHandler.insertCoin('quarter')).toBe(25);
        expect(changeHandler.insertCoin('nickel')).toBe(5);

        expect(changeHandler.isPaymentSufficient(20)).toBe(true);

    });

});



