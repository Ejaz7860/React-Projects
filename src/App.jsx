import { BrowserRouter, Routes, Route } from "react-router-dom";
import Componet from "./componet";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Componet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
