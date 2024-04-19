#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278,
    EUR: 0.92,
    AUD: 1.52,
    SAR: 3.75,
    KDN: 0.31,
};
let user_input = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select your currency",
        choices: ["USD", "PKR", "EUR", "AUD", "SAR", "KDN"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "PKR", "EUR", "AUD", "SAR", "KDN"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount for convert",
    },
]);
if (user_input.fromCurrency === user_input.toCurrency) {
    console.log("Ops! you're choosing same currency");
}
else {
    let fromCurrencyAmount = currency[user_input.fromCurrency];
    let toCurrencyAmount = currency[user_input.toCurrency];
    let Amount = user_input.amount;
    let baseAmount = Amount / fromCurrencyAmount;
    let totalConvertedAmount = baseAmount * toCurrencyAmount;
    console.log(`Your Converted Currency Amount is:`);
    console.log(totalConvertedAmount);
}
