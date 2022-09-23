import { sidebarCoins } from "./btcinfosidebar.js";
import { coinList } from "./coinlist.js";
import { btcPriceStats } from "./btcpricestatistics.js";

const btcID = document.getElementById("btc-id");
const btcPrice = document.getElementById("btc-price");
const btcPercentage = document.getElementById("btc-percentage");
const btcMarketcap = document.getElementById("marketcap");
const btc24HRTrading = document.getElementById("volumeUsd24Hr");
const btcSupply = document.getElementById("supply");
const btcMaxSupply = document.getElementById("maxsupply");

export const btcGetData = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const data = await response.json();
  const btcName = data.data[0];
  updateMain(btcName);
  sidebarCoins(data);
  coinList(data.data);
  btcPriceStats(btcName);
};

const updateMain = (data) => {
  const numberFormat = new Intl.NumberFormat("en-US");

  const rawPriceUsd = parseFloat(data.priceUsd).toFixed(2);
  const priceUsd = `$${numberFormat.format(rawPriceUsd)}`;

  const rawMarketcapUsd = parseFloat(data.marketCapUsd).toFixed(2);
  const marketcapUsd = `$${numberFormat.format(rawMarketcapUsd)}`;

  const rawVolumeUsd = parseFloat(data.volumeUsd24Hr).toFixed(2);
  const volumeUsd = `$${numberFormat.format(rawVolumeUsd)}`;

  const changePercentage = `${(
    (Number(data.changePercent24Hr) * 100) /
    100
  ).toFixed(1)}%`;

  const rawSupplies = parseFloat(data.supply).toFixed(2);
  const supplies = numberFormat.format(rawSupplies);

  const rawMaxSupplies = parseFloat(data.maxSupply).toFixed(2);
  const maxSupplies = numberFormat.format(rawMaxSupplies);

  btcID.innerHTML = data.id;
  btcPrice.innerHTML = priceUsd;
  btcPercentage.innerHTML = changePercentage;
  btcMarketcap.innerHTML = marketcapUsd;
  btc24HRTrading.innerHTML = volumeUsd;
  btcSupply.innerHTML = supplies;
  btcMaxSupply.innerHTML = maxSupplies;
};
