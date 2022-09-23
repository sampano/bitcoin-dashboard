const coinRank = document.getElementById("coinstats-rank");
const coinName = document.getElementById("coinstats-name");
const coinSymbol = document.getElementById("coinstats-symbol");
const coinSupply = document.getElementById("coinstats-supply");
const coinTradingVol = document.getElementById("coinstats-trading-vol");
const coinPrice = document.getElementById("coinstats-price");
const coinWebsite = document.getElementById("coinstats-website");

export const btcPriceStats = (data) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const rawVolumeUsd = parseFloat(data.volumeUsd24Hr).toFixed(2);
  const volumeUsd = `$${numberFormat.format(rawVolumeUsd)}`;

  const rawPriceUsd = parseFloat(data.priceUsd).toFixed(2);
  const priceUsd = `$${numberFormat.format(rawPriceUsd)}`;

  coinRank.innerHTML = data.rank;
  coinName.innerHTML = data.id;
  coinSymbol.innerHTML = data.symbol;
  coinSupply.innerHTML = numberFormat.format(data.supply);
  coinTradingVol.innerHTML = volumeUsd;
  coinPrice.innerHTML = priceUsd;
  coinWebsite.innerHTML = data.explorer;
};
