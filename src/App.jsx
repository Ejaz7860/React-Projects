import { BrowserRouter, Routes, Route } from "react-router-dom";
import Componet from "./componet";
import CryptoHome from "./cryptoApp/components/Home";
import CryptoCoins from "./cryptoApp/components/Coins";
import CryptoExchange from "./cryptoApp/components/Exchange";
import CryptoCoinDetails from "./cryptoApp/components/CoinDetails";

// CAMERA APP

import CDashboard from "./Scart/pages/Dashboard";
import CProduct from "./Scart/components/Product";
import CAbout from "./Scart/pages/About";
import CContact from "./Scart/pages/Contact";

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

          {/* CAMERA */}
          <Route path="/camera" element={<CDashboard />} />
          <Route path="/camera/product" element={<CProduct />} />
          <Route path="/camera/about" element={<CAbout />} />
          <Route path="/camera/contact" element={<CContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
