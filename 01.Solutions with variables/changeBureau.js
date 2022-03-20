function solve(input) {
  const numberOfBuicoins = Number(input[0]);
  const numberOfYuan = Number(input[1]);
  const commission = Number(input[2]);

  const bitcoinToBGN = 1168;
  const yuanToUSD = 0.15;
  const USDtoBGN = 1.76;
  const eurToBGN = 1.95;

  const totalBitcoinsInBGN = numberOfBuicoins * bitcoinToBGN;
  const totalYuanToUSD = numberOfYuan * yuanToUSD;
  const totalUSDtoBGN = totalYuanToUSD * USDtoBGN;

  const totalInBGN = totalBitcoinsInBGN + totalUSDtoBGN;
  const totalInEur = totalInBGN / eurToBGN;
  const taxCommission = totalInEur * 0.05;

  const res = totalInEur - taxCommission;

  console.log(res.toFixed(2));
}

solve(["1", "5", "5"]);
