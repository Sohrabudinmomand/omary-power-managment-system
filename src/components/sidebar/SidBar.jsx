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
} from "@mui/icons-material";

import SideBarLogo from "./assets/sidebar-logo.png";

const SidBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const onMouseEnter = () => {
    setDropdownMenu(true);
  };

  const onMouseLeave = () => {
    setDropdownMenu(false);
  };

  const navLinks = [
    { to: "/", icon: <Home />, label: "Dashboard" },
    { to: "/Customer", icon: <Person />, label: "Customer" },
    { to: "/MeterCycle", icon: <Speed />, label: "MeterCycle" },
    { to: "/Earnings", icon: <ShoppingBasket />, label: "Earnings" },
    { to: "/HRM", icon: <GroupAdd />, label: "HRM" },
    { to: "/Expenses", icon: <MonetizationOn />, label: "Expenses" },
    { to: "/Reports", icon: <ShowChart />, label: "Reports" },
    { to: "/Settings", icon: <Settings />, label: "Settings" },
  ];

  const expensesDropdownLinks = [
    { to: "/expenses/all", label: "All Expenses" },
    { to: "/expenses/payment-sent", label: "Payment Sent" },
    { to: "/expenses/payment-received", label: "Payment Received" },
    { to: "/expenses/owner-pickups", label: "Owner Pickups" },
    { to: "/expenses/expense-category", label: "Expense Category" },
    { to: "/expenses/people", label: "People" },
  ];

  return (
    <div className="w-1/5 h-auto flex flex-col px-5 bg-white border relative">
      <div className="flex items-center justify-center m-2">
        <img className="w-[96px] h-[96px]" src={SideBarLogo} alt="" />
      </div>
      <div className="w-full flex flex-col items-center p-5">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.to}
            to={navLink.to}
            className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
          >
            <span>{navLink.icon}</span>
            <span className="ml-2">{navLink.label}</span>
          </Link>
        ))}

        <div
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span>
            <MonetizationOn />
          </span>
          <span className="ml-2">Expenses</span>
          {dropdownMenu && (
            <ul className="absolute left-0 mt-2 bg-white border rounded shadow">
              {expensesDropdownLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidBar;
