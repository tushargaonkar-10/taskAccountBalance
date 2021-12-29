
const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]


const accountTypeChecker = (accountBalanceHistory) => {

    try {

        let result = false;

        let length = accountBalanceHistory.length;

        let tempDifference; 


        if (length === 0) {

            throw new Error("Empty account balance history");

        }

        for (let i = length; i > 0; i--) {

            let difference = 0;

            let element = accountBalanceHistory[i - 1];

            let nextElement = accountBalanceHistory[i - 2];

            if (nextElement != undefined) {

                difference = element.account.balance.amount - nextElement.account.balance.amount;

                if (i == length) {

                    tempDifference = difference;
                }
            }

            if (tempDifference !== difference && difference != 0) {

                result = true;
            }

        }

        return result ? "A" : "B";

    } catch (error) {

        console.log(error);
        return error;
    }
};

const accountType = accountTypeChecker(accountBalanceHistory);

console.log(accountType);




