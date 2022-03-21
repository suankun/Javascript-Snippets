function bitcoinMining(input) {
  const bitcoinInLeva = 11949.16;
  const oneGrGoldInLeva = 67.51;
  let boughtBitcoin = 0;
  let dayOfBuyingFirstBitcoin = 0;
  let earnedMoney = 0;
  let day = 0;

  for (let i = 0; i < input.length; i++) {
    day++;
    let tempBoughtBitcoin = 0;
    let digGold = input[i];
    if (day % 3 == 0) {
      digGold -= digGold * 0.3;
      earnedMoney += digGold * oneGrGoldInLeva;
    } else {
      earnedMoney += digGold * oneGrGoldInLeva;
    }
    if (earnedMoney >= bitcoinInLeva && dayOfBuyingFirstBitcoin == 0) {
      tempBoughtBitcoin += Math.floor(earnedMoney / bitcoinInLeva);
      earnedMoney -= tempBoughtBitcoin * bitcoinInLeva;
      dayOfBuyingFirstBitcoin = day;
    } else if (earnedMoney >= bitcoinInLeva) {
      tempBoughtBitcoin += Math.floor(earnedMoney / bitcoinInLeva);
      earnedMoney -= tempBoughtBitcoin * bitcoinInLeva;
    }
    boughtBitcoin += tempBoughtBitcoin;
  }
  console.log(`Bought bitcoins: ${boughtBitcoin}`);
  if (dayOfBuyingFirstBitcoin !== 0) {
    console.log(
      `Day of the first purchased bitcoin: ${dayOfBuyingFirstBitcoin}`
    );
  }
  console.log(`Left money: ${earnedMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
