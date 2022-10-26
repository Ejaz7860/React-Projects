import { BrowserRouter, Routes, Route } from "react-router-dom";
import Componet from "./componet";
import CryptoHome from "./cryptoApp/components/Home";
import CryptoCoins from "./cryptoApp/components/Coins";
import CryptoExchange from "./cryptoApp/components/Exchange";
import CryptoCoinDetails from "./cryptoApp/components/CoinDetails";

import "./scss/main.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Componet />} />
          <Route path="/crypto" element={<CryptoHome />} />
          <Route path="/crypto/coins" element={<CryptoCoins />} />
          <Route path="/crypto/exchange" element={<CryptoExchange />} />
          <Route path="/crypto/coin/:id" element={<CryptoCoinDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
