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
  // used this state to control which page is active in sidebar
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "Dashboard"
  );

  // this state uses to visible and hide the dropdown menu of expense
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // give a color to the active page
  // and display the dropdown menu
  const handleItemClick = (item) => {
    setActiveItem(item);
    setDropdownVisible(true);
  };

  // close the dropdown menu if it is open
  const handleDropdownItemClick = () => {
    setDropdownVisible(false);
  };

  // used this useEffect to stay on the same page after
  // broswer refresh
  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  return (
    // main container
    <div className="w-[270px] h-auto flex flex-col bg-white border relative">
      {/* logo box */}
      <div className="flex items-center justify-center my-2">
        <img className="w-[96px] h-[96px] my-4" src={SideBarLogo} alt="" />
      </div>

      {/* Links box start from here */}
      <div className="w-full flex flex-col items-center gap-2">
        {/* LINK DASHBORD */}
        <Link
          to="/"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
    ${activeItem === "Dashboard" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <span>
            <Home />
          </span>
          <span>Dashboard</span>
        </Link>

        {/* LINK CUSTOMER */}
        <Link
          to="/Customer"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
          ${
            activeItem === "Customers" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
          onClick={() => handleItemClick("Customers")}
        >
          <span>
            <Person />
          </span>
          <span>Customers</span>
        </Link>

        {/* LINK METER CYCLE */}
        <Link
          to="/MeterCycle"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
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
          <span>Meter Cycle</span>
        </Link>

        {/* LINK EARNINGS */}
        <Link
          to="/Earnings"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
          ${
            activeItem === "Earnings" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
          onClick={() => handleItemClick("Earnings")}
        >
          <span>
            <ShoppingBasket />
          </span>
          <span>Earnings</span>
        </Link>

        {/* LINK HRM */}
        <Link
          to="/HRM"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
          ${activeItem === "HRM" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => handleItemClick("HRM")}
        >
          <span>
            <GroupAdd />
          </span>
          <span>HRM</span>
        </Link>

        {/* LINK EXPENSE */}
        <Link
          to="/"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
    ${activeItem === "Expenses" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => {
            handleItemClick("Expenses");
            setDropdownVisible(!isDropdownVisible);
          }}
        >
          <span>
            <MonetizationOn />
          </span>
          <span>Expenses</span>
        </Link>

        {/* DROPDOWN MENU EXPENSE */}
        <div className={isDropdownVisible ? "" : "hidden"}>
          {/* first dropdown item All expense */}
          <Link
            to="/expenses/all"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "expenses/all"
                ? "bg-[#112F53] text-white"
                : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>All expenses</span>
          </Link>

          {/* second dropdown item payment sent */}
          <Link
            to="/expenses/payment-sent"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "payment-sent"
                ? "bg-[#112F53] text-white"
                : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>Payment sent</span>
          </Link>

          {/* third dropdown item payment received */}
          <Link
            to="/expenses/payment-received"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "payment-received"
                ? "bg-[#112F53] text-white"
                : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>Payment Received</span>
          </Link>

          {/* fourth dropdown item owner pickups */}
          <Link
            to="/expenses/owner-pickups"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "owner-pickups"
                ? "bg-[#112F53] text-white"
                : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>Owner Pickups</span>
          </Link>

          {/* fifth dropdown item expense category */}
          <Link
            to="/expenses/expense-category"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "expense-category"
                ? "bg-[#112F53] text-white"
                : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>Expense Category</span>
          </Link>

          {/* sixth dropdown item people */}
          <Link
            to="/expenses/people"
            className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
            ${
              activeItem === "People" ? "bg-[#112F53] text-white" : "bg-white"
            }`}
          >
            <span>
              <FiberManualRecordIcon />
            </span>
            <span>People</span>
          </Link>
        </div>

        {/* LINK REPORTS */}
        <Link
          to="/Reports"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
          ${activeItem === "Reports" ? "bg-[#112F53] text-white" : "bg-white"}`}
          onClick={() => handleDropdownItemClick("Reports")}
        >
          <span>
            <ShowChart />
          </span>
          <span>Reports</span>
        </Link>

        {/* LINK SETTINGS */}
        <Link
          to="/Settings"
          className={`w-full flex flex-row items-center justify-start gap-2 p-2 rounded cursor-pointer transition-all hover:bg-[#112F53] hover:text-white
          ${
            activeItem === "Settings" ? "bg-[#112F53] text-white" : "bg-white"
          }`}
          onClick={() => handleItemClick("Settings")}
        >
          <span>
            <Settings />
          </span>
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
