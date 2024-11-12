import axios from "axios";
import { useState, useEffect } from "react";

export function CryptoCoin({ name = "Crypto", keyName = "CRY", img = "#" }) {
  const [price, setPrice] = useState("0.00");
  const apiRequestURI = `https://api.coinbase.com/v2/exchange-rates?currency=${keyName}`;

  useEffect(() => {
    axios.get(apiRequestURI).then((result) => {
      const rawPrice = parseFloat(result.data.data.rates.USD);
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(rawPrice);
      setPrice(formattedPrice);
    });
  }, [apiRequestURI]);

  return (
    <div className="cryp-coin">
      <img src={img} alt={name} />
      <span className="name">{name}</span>
      <span className="key-name">({keyName})</span>
      <span className="price">{price} USD</span>
    </div>
  );
}
