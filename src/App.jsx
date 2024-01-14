import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/SidBar";
import Dashboard from "./components/dashboard/Dashboard";
import Customer from "./components/customer/Customer";
import Earnings from "./components/Earnings/Earnings";
import Expenses from "./components/Expenses/Expenses";
import AllExpenses from "./components/All Expenses/AllExpenses";
import PeymentSent from "./components/Payment sent/PaymentSent";
import PaymentPaymentReceived from "./components/Payment Received/PaymentReceived";
import OwnerPickUps from "./components/Owner Pickups/OwnerPickups";
import ExpenseCategory from "./components/Expense Category/ExpenseCategory";
import People from "./components/People/People";
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Earnings" element={<Earnings />} />
          <Route path="/Expenses" element={<Expenses />} />
          {/* expenses dropdown pages starts here */}
          <Route path="/expenses/all" element={<AllExpenses />} />
          <Route path="/expenses/payment-sent" element={<PeymentSent />} />
          <Route
            path="/expenses/payment-received"
            element={<PaymentPaymentReceived />}
          />
          <Route path="/expenses/owner-pickups" element={<OwnerPickUps />} />
          <Route
            path="/expenses/expense-category"
            element={<ExpenseCategory />}
          />
          <Route path="/expenses/people" element={<People />} />
          {/* expenses dropdown pages end here */}
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
