const divCoinList = document.getElementById("coinlist");

export const coinList = (data) => {
  const coins = data;
  const topTenCoins = coins.splice(0, 20);
  console.log(topTenCoins);
  for (let coin of topTenCoins) {
    const coinRank = coin.rank;
    const coinID = coin.id;

    const numberFormat = new Intl.NumberFormat("en-US");

    const rawPriceUsd = parseFloat(coin.priceUsd).toFixed(2);
    const priceUsd = `$${numberFormat.format(rawPriceUsd)}`;

    const rawMarketcapUsd = parseFloat(coin.marketCapUsd).toFixed(2);
    const marketcapUsd = `$${numberFormat.format(rawMarketcapUsd)}`;

    const rawVolumeUsd = parseFloat(coin.volumeUsd24Hr).toFixed(2);
    const volumeUsd = `$${numberFormat.format(rawVolumeUsd)}`;

    const rawVwap = parseFloat(coin.vwap24Hr).toFixed(2);
    const vwap = `$${rawVwap.toLocaleString("en-US")}`;

    const changePercentage = `${(
      (Number(coin.changePercent24Hr) * 100) /
      100
    ).toFixed(1)}%`;

    const createNewDiv = document.createElement("div");
    createNewDiv.innerHTML = `<ul>
   <li>${coinRank}</li>
   <li>${coinID}</li>
   <li>${priceUsd}</li>
   <li>${volumeUsd}</li>
   <li>${marketcapUsd}</li>
   <li>${changePercentage}</li>
   <li>${vwap}</li></ul>`;
    divCoinList.appendChild(createNewDiv);
  }
};
