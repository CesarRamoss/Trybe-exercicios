const fetchShips = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets';

  const allCoins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return allCoins;
}

const insertCoins = async () => {
  const coins = await fetchShips();
  const coinsList = document.querySelector('#coins-list');

  coins.forEach((coin) => {
    const li = document.createElement('li');
    li.innerText = `${coin.name} (${coin.symbol}):${coin.priceUsd}`;
    coinsList.appendChild(li);
  });
}

window.onload = () => insertCoins();
