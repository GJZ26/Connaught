import axios from "axios";
import { useState, useEffect } from "react";

export function CryptoCoin({ name = "Crypto", keyName = "CRY", img = "#" }) {
  const [price, setPrice] = useState("0.00");
  const apiRequestURI = `https://api.coinbase.com/v2/exchange-rates?currency=${keyName}`;
  const storageKey = `crypto_price_${keyName}`;

  useEffect(() => {
    const fetchPrice = async () => {
      const cachedData = localStorage.getItem(storageKey);
      const now = new Date().getTime();

      if (cachedData) {
        const { price, timestamp } = JSON.parse(cachedData);

        if (now - timestamp < 24 * 60 * 60 * 1000) {
          setPrice(price);
          return;
        }
      }

      try {
        const result = await axios.get(apiRequestURI);

        let rawPrice = parseFloat(
          result.data.data.rates.USD ?? getRandomFloat(10, 100)
        );

        const formattedPrice = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(rawPrice);

        setPrice(formattedPrice);

        localStorage.setItem(
          storageKey,
          JSON.stringify({ price: formattedPrice, timestamp: now })
        );
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };

    fetchPrice();
  }, [apiRequestURI, storageKey]);

  return (
    <div className="cryp-coin">
      <img src={img} alt={name} />
      <span className="name">{name}</span>
      <span className="key-name">({keyName})</span>
      <span className="price">{price}</span>
    </div>
  );
}

function getRandomFloat(n, m) {
  const random = Math.random() * (m - n) + n;
  return random.toFixed(2);
}
