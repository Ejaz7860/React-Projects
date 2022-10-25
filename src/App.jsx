// import Home from "./LoginRegisterationForm/components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./LoginRegisterationForm/components/Dashboard";
// import Hero from "./LoginRegisterationForm/components/Home/Home"
// import Contactus from "./LoginRegisterationForm/pages/Contact"
// import Tabs from "./Tabs/Components/TabComponent/Tabs"
// import Dashboard from "./holiday/Dashboard"
// import Home from "./UseMemo/components/Home"
// import Home from "./react-spring/Test"
import  USEReducer from "./useReducer/Reducer"
// import Ticket from "./Ticket_report/Report"
// import Tab from "./Ticket_report/Tableview/Tableview";
import DashboardT from "./Ticket_report/Pages/Dashboard.jsx"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<h1></h1>} /> */}
          {/* <Route path="/Dashboard" element={<Dashboard/>}>
            <Route index element={<Hero/>}/>
            <Route path="contact" element={<Contactus/>} /> */}
          {/* </Route> */}
          {/* <Route path="/tabs" element={<Tabs/>}/> */}
          {/* <Route path="/holiday" element={<Dashboard/>} /> */}
          {/* <Route path="/report" element={<Ticket/>} /> */}
          {/* <Route path="/report" element={<DashboardT/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
