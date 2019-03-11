/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.


 */
'use strict';

class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */


    insertCoin(type) {
    let ChangeHandler = new ChangeHandler(0,0);
        if (type === 'quarter') {
            return this.cashTendered + 25;
        } else if (type === 'dime') {
            return this.cashTendered + 10;

        } else if (type === 'nickel') {
            return this.cashTendered + 5;

        } else if (type === 'penny') {
            return this.cashTendered + 1;

        }
        

    }
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if(this.cashTendered >= this.amountDue){
            return true;
        }else{
            return false;
        }
    }


    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 25,
            dimes: 10,
            nickels: 5,
            pennies: 1
        };
    }
}
