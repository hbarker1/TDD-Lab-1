/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.


 */
'use strict';

module.exports = {
    ChangeHandler
  };


class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */


    insertCoin(type) {
        const type = ['quarter', 'dime', 'nickel', 'penny']
        return this.cashTendered + 1;

    }
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        return this.amountDue = true;

    }

    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 25,
            dimes: 10,
            nickels: 5,
            pennies: 1
        }
    }
}