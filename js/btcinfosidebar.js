import { btcGetData } from "./btcinfo.js";
const firstCoinName = document.getElementById("first-coin-name");
const firstCoinSymbol = document.getElementById("first-coin-symbol");
const firstCoinRank = document.getElementById("first-coin-rank");
const secondCoinName = document.getElementById("second-coin-name");
const secondCoinSymbol = document.getElementById("second-coin-symbol");
const secondCoinRank = document.getElementById("second-coin-rank");
const thirdCoinName = document.getElementById("third-coin-name");
const thirdCoinSymbol = document.getElementById("third-coin-symbol");
const thirdCoinRank = document.getElementById("third-coin-rank");

export const sidebarCoins = (data) => {
  const firstRandCoin = Math.floor(Math.random() * 100) + 1;
  const secondRandCoin = Math.floor(Math.random() * 100) + 1;
  const thirdRandCoin = Math.floor(Math.random() * 100) + 1;

  const sidebarCoinData = data.data;
  firstCoinInfo(sidebarCoinData, firstRandCoin);
  secondCoinInfo(sidebarCoinData, secondRandCoin);
  thirdCoinInfo(sidebarCoinData, thirdRandCoin);
};

const firstCoinInfo = (sidebarCoinData, firstRandCoin) => {
  firstCoinRank.innerHTML = `#${sidebarCoinData[firstRandCoin].rank}`;
  firstCoinName.innerHTML = sidebarCoinData[firstRandCoin].name;
  firstCoinSymbol.innerHTML = sidebarCoinData[firstRandCoin].symbol;
};

const secondCoinInfo = (sidebarCoinData, secondRandCoin) => {
  secondCoinRank.innerHTML = `#${sidebarCoinData[secondRandCoin].rank}`;
  secondCoinName.innerHTML = sidebarCoinData[secondRandCoin].name;
  secondCoinSymbol.innerHTML = sidebarCoinData[secondRandCoin].symbol;
};

const thirdCoinInfo = (sidebarCoinData, thirdRandCoin) => {
  thirdCoinRank.innerHTML = `#${sidebarCoinData[thirdRandCoin].rank}`;
  thirdCoinName.innerHTML = sidebarCoinData[thirdRandCoin].name;
  thirdCoinSymbol.innerHTML = sidebarCoinData[thirdRandCoin].symbol;
};
