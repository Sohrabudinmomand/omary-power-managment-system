import { useState, useEffect } from "react";
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
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "Dashboard"
  );

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setDropdownVisible(false);
  };

  const handleDropdownItemClick = (item) => {
    setActiveItem(item);
    setDropdownVisible(false);
  };

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  return (
    <div className="w-1/5 h-auto flex flex-col px-5 bg-white border relative">
      <div className="flex items-center justify-center my-2">
        <img className="w-[96px] h-[96px]" src={SideBarLogo} alt="" />
      </div>
      <div className="w-full flex flex-col items-center">
        <Link
          to="/"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
    ${activeItem === "Dashboard" ? "bg-[#112F53] text-white" : "bg-white"}`}
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
          ${
            activeItem === "Customers" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
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
          ${
            activeItem === "Meter Cycle"
              ? "bg-[#112F53] text-white"
              : "bg-white"
          }`}
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
          ${
            activeItem === "Earnings" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
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
          ${activeItem === "HRM" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => handleItemClick("HRM")}
        >
          <span>
            <GroupAdd />
          </span>
          <span className="ml-2">HRM</span>
        </Link>

        <Link
          to="/"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
    ${activeItem === "Expenses" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => {
            handleItemClick("Expenses");
            setDropdownVisible(!isDropdownVisible);
          }}
        >
          <span>
            <MonetizationOn />
          </span>
          <span className="ml-2">Expenses</span>
        </Link>

        <div className={isDropdownVisible ? "" : "hidden"}>
          <Link
            to="/expenses/all"
            className="w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer border my-2"
            onClick={() => {
              handleItemClick("All Expenses");
              setDropdownVisible(!isDropdownVisible);
            }}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span className="ml-2">All expenses</span>
          </Link>

          <Link
            to="/expenses/payment-sent"
            className="w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer border"
            onClick={() => {
              handleItemClick("All Expenses");
              setDropdownVisible(!isDropdownVisible);
            }}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span className="ml-2">Payment sent</span>
          </Link>
        </div>

        <Link
          to="/Reports"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${activeItem === "Reports" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => handleDropdownItemClick("Reports")}
        >
          <span>
            <ShowChart />
          </span>
          <span className="ml-2">Reports</span>
        </Link>

        <Link
          to="/Settings"
          className={`w-full flex flex-row items-center justify-start p-4 rounded cursor-pointer
          ${
            activeItem === "Settings" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
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
