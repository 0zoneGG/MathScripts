// assets and debts
const assets = [1000, 500, 100];
const debts = [2000, 1500, 1000];

// Total assets and total debts
const totalAssets = assets.reduce((acc, value) => acc + value, 0);
const totalDebts = debts.reduce((acc, value) => acc + value, 0);

// Totalnet worth
const netWorth = totalAssets - totalDebts;

// Display the result
const sadFace = "Sad face emoji :("
console.log("Total Assets: $" + totalAssets);
console.log("Total Debts: $" + totalDebts);
console.log("Net Worth: $" + netWorth);
console.log(sadFace)
