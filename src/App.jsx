import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/SidBar";
import Dashboard from "./components/dashboard/Dashboard";
import Customer from "./components/customer/Customer";
import Earnings from "./components/Earnings/Earnings";
import Expenses from "./components/Expenses/Expenses";
import HRM from "./components/HRM/HRM";
import MeterCycle from "./components/meter cycle/MeterCycle";

import Reports from "./components/Report/Reports";

import Settings from "./components/settings/Settings";

function App() {
  return (
    <div className="flex flex-row">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Earnings" element={<Earnings />} />
          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/Earnings" element={<Earnings />} />
          <Route path="/HRM" element={<HRM />} />
          <Route path="/MeterCycle" element={<MeterCycle />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
