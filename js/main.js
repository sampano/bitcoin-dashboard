import { btcGetData } from "./btcinfo.js";

const btnPrice = document.getElementById("btnPrice");
const btnMarketCap = document.getElementById("btnMarketCap");
const btnTotalVolume = document.getElementById("btnTotalVolume");

export async function priceChart() {
  const btcData = await getBitcoinData();
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: btcData.btcDate,
      datasets: [
        {
          label: "# Bitcoin Price USD",
          data: btcData.btcPrice,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function getBitcoinData() {
  const btcPrice = [];
  const btcDate = [];
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=10&interval=hourly"
  );
  const data = await response.json();
  const prices = data.prices;

  for (let price of prices) {
    const date = new Date(price[0]).toLocaleDateString("en-US");
    btcPrice.push(price[1]);
    btcDate.push(date);
  }
  return { btcPrice, btcDate };
}
btcGetData();
priceChart();
btnPrice.addEventListener("click", priceChart);

//-------------- MARKET_CAP_CHART-----------------------------------

// async function MarketcapChart() {
//   const btcData = await getBitcoinData();
//   myChart.destroy();
//   const ctx = document.getElementById("myChart").getContext("2d");

//   const myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: btcData.btcDate,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: btcData.btcPrice,
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });

//   async function getBitcoinData() {
//     const btcPrice = [];
//     const btcDate = [];
//     const response = await fetch(
//       "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=10&interval=hourly"
//     );
//     const data = await response.json();
//     const prices = data.prices;

//     for (let price of prices) {
//       const date = new Date(price[0]).toLocaleDateString("en-US");
//       btcPrice.push(price[1]);
//       btcDate.push(date);
//     }
//     return { btcPrice, btcDate };
//   }
// }

// btnMarketCap.addEventListener("click", MarketcapChart);

// async function TotalVolumeChart() {
//   console.log("samgwapo");

//   const btcData = await getBitcoinData();
//   console.log(btcData);

//   const ctx = document.getElementById("myChart").getContext("2d");
//   const myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//       labels: btcData.btcDate,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: btcData.btcPrice,
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });

//   async function getBitcoinData() {
//     const btcPrice = [];
//     const btcDate = [];
//     const response = await fetch(
//       "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=10&interval=hourly"
//     );
//     const data = await response.json();
//     const prices = data.prices;

//     for (let price of prices) {
//       const date = new Date(price[0]).toLocaleDateString("en-US");
//       btcPrice.push(price[1]);
//       btcDate.push(date);
//     }
//     return { btcPrice, btcDate };
//   }
// }

// btnTotalVolume.addEventListener("click", TotalVolumeChart);
