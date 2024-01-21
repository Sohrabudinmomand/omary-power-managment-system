import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Person,
  Speed,
  ShoppingBasket,
  GroupAdd,
  MonetizationOn,
  ShowChart,
  Settings,
  FiberManualRecord as FiberManualRecordIcon,
} from "@mui/icons-material";

import SideBarLogo from "./assets/sidebar-logo.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const onExpenseClick = () => {
    setDropdownMenu(!dropdownMenu);
  };

  return (
    <div className="w-1/5 h-auto flex flex-col px-5 bg-white border relative">
      <div className="flex items-center justify-center">
        <img className="w-[96px] h-[96px]" src={SideBarLogo} alt="" />
      </div>
      <div className="w-full flex flex-col items-center">
        <Link
          to="/"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
    ${activeItem === "Dashboard" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <span>
            <Home />
          </span>
          <span className="ml-2">Dashboard</span>
        </Link>

        <Link
          to="/Customer"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Customers" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Customers")}
        >
          <span>
            <Person />
          </span>
          <span className="ml-2">Customers</span>
        </Link>

        <Link
          to="/MeterCycle"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Meter Cycle" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Meter Cycle")}
        >
          <span>
            <Speed />
          </span>
          <span className="ml-2">Meter Cycle</span>
        </Link>

        <Link
          to="/Earnings"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Earnings" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Earnings")}
        >
          <span>
            <ShoppingBasket />
          </span>
          <span className="ml-2">Earnings</span>
        </Link>

        <Link
          to="/HRM"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "HRM" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("HRM")}
        >
          <span>
            <GroupAdd />
          </span>
          <span className="ml-2">HRM</span>
        </Link>

        <div
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer relative
          ${activeItem === "Expenses" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Expenses")}
        >
          <span>
            <MonetizationOn />
          </span>
          <span className="ml-2" onClick={onExpenseClick}>
            Expenses
          </span>
          {dropdownMenu && (
            <div className="absolute top-10 left-0 mt-2 bg-white border rounded shadow">
              <Link
                to="/expenses/all"
                className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
                ${activeItem === "All expenses" ? "bg-red-500" : "bg-white"}`}
                onClick={() => handleItemClick("All expenses")}
              >
                <span>
                  <FiberManualRecordIcon />
                </span>
                <span className="ml-2">All expenses</span>
              </Link>

              <Link
                to="/expenses/payment-sent
              "
                className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
              ${activeItem === "Payment sent" ? "bg-red-500" : "bg-white"}`}
                onClick={() => handleItemClick("Payment sent")}
              >
                <span>
                  <FiberManualRecordIcon />
                </span>
                <span className="ml-2">Payment sent</span>
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/Reports"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Reports" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Reports")}
        >
          <span>
            <ShowChart />
          </span>
          <span className="ml-2">Reports</span>
        </Link>

        <Link
          to="/Settings"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Settings" ? "bg-red-500" : "bg-white"}`}
          onClick={() => handleItemClick("Settings")}
        >
          <span>
            <Settings />
          </span>
          <span className="ml-2">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
