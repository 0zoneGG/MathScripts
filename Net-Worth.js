const assets = [1000, 500, 100];
const debts = [2000, 1500, 1000];

const totalAssets = assets.reduce((acc, value) => acc + value, 0);
const totalDebts = debts.reduce((acc, value) => acc + value, 0);
const netWorth = totalAssets - totalDebts;const sadFace = "Sad face emoji :("

console.log("Total Assets: $" + totalAssets);
console.log("Total Debts: $" + totalDebts);
console.log("Net Worth: $" + netWorth);
console.log(sadFace)
