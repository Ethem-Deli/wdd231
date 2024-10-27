// Function to fetch and display cryptocurrency data from CoinGecko
async function loadCryptoData() {
    const cryptoGrid = document.getElementById("crypto-grid");

    // CoinGecko API URL for top cryptocurrencies
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);

        const data = await response.json();
        cryptoGrid.innerHTML = "";  // Clear previous data

        data.forEach(crypto => {
            const cryptoItem = document.createElement("div");
            cryptoItem.classList.add("crypto-item");

            // Construct the crypto info display
            cryptoItem.innerHTML = `
                <img src="${crypto.image}" alt="${crypto.name} logo">
                <div class="crypto-name">${crypto.name} (${crypto.symbol.toUpperCase()})</div>
                <div class="crypto-price">$${crypto.current_price.toLocaleString()}</div>
                <div class="crypto-change" style="color: ${crypto.price_change_percentage_24h >= 0 ? 'green' : 'red'};">
                    (${crypto.price_change_percentage_24h.toFixed(2)}%)
                </div>
            `;

            cryptoGrid.appendChild(cryptoItem);
        });
    } catch (error) {
        console.error('Failed to load cryptocurrency data:', error);
        cryptoGrid.innerHTML = `<p>Failed to load cryptocurrency data. Check the console for details: ${error.message}</p>`;
    }
}

// Load cryptocurrency data on page load
window.addEventListener("load", loadCryptoData);
