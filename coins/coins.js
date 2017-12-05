// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.



/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

let money = prompt("How much money do you have? (Enter without dollar sign.)");
var coinPurse = {}; 

var coins = coinCounter(money);
console.log(coins);

function coinCounter(amount) {
  amount = amount * 100;
  amount = coinAmount("quarters", 25, amount);
  amount = coinAmount("dimes", 10, amount);
  amount = coinAmount("nickels", 5, amount);
  coinAmount("pennies", 1, amount);

  return coinPurse;
}

function coinAmount(coin, value, amount) {
  coinPurse[coin] = Math.floor(amount/value);
  return amount % value;
}


// coinPurse.quarters = Math.floor(amount/25);
// amount = amount % 25;

// coinPurse.dimes = Math.floor(amount/10);
// amount = amount % 10;

// coinPurse.nickels = Math.floor(amount/5);
// amount = amount % 5;

// coinPurse.pennies = amount;

// console.log(`quarters: ${coins.quarters}`);
// console.log(`dimes: ${coins.dimes}`);
// console.log(`nickels: ${coins.nickels}`);
// console.log(`pennies: ${coins.pennies}`);






