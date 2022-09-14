import Home from "./LoginRegisterationForm/components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./LoginRegisterationForm/components/Dashboard";
// import Hero from "./LoginRegisterationForm/components/Home/Home"
// import Contactus from "./LoginRegisterationForm/pages/Contact"
// import Tabs from "./Tabs/Components/TabComponent/Tabs"
// import Dashboard from "./holiday/Dashboard"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Dashboard" element={<Dashboard/>}>
            <Route index element={<Hero/>}/>
            <Route path="contact" element={<Contactus/>} /> */}
          {/* </Route> */}
          {/* <Route path="/tabs" element={<Tabs/>}/> */}
          {/* <Route path="/holiday" element={<Dashboard/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
