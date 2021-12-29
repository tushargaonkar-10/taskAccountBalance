// sample jest test cases
const accountTypeService = require('../accountType');


describe("accountTypeChecker", () => {

    test("throws empty array message", () => {

        expecet(accountTypeChecker([])).toThrow();

    });



    test("returns B for fixed deductions", () => {

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

        ];

        expecet(accountTypeChecker(accountBalanceHistory)).toBe("B");

    });



    test("returns A for variable deductions", () => {

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

                    balance: { amount: 300 },

                },

            }

        ];

        expecet(accountTypeChecker(accountBalanceHistory)).toBe("A");

    });

});