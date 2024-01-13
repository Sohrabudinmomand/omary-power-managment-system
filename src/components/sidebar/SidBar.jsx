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
  return (
    <div className="w-1/5 h-auto flex flex-col px-5 bg-white border">
      <div className="flex items-center justify-center m-2">
        <img className="w-[96px] h-[96px]" src={SideBarLogo} alt="" />
      </div>
      <div className="w-full flex flex-col items-center p-5">
        <Link
          to="/Dashboard"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <Home />
          </span>
          <span className="ml-2">Dashboard</span>
        </Link>

        <Link
          to="/Customer"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <Person />
          </span>
          <span className="ml-2">Customer</span>
        </Link>

        <Link
          to="/MeterCycle"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <Speed />
          </span>
          <span className="ml-2">MeterCycle</span>
        </Link>

        <Link
          to="/Earnings"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <ShoppingBasket />
          </span>
          <span className="ml-2">Earnings</span>
        </Link>

        <Link
          to="/HRM"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <GroupAdd />
          </span>
          <span className="ml-2">HRM</span>
        </Link>

        <Link
          to="/Expenses"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <MonetizationOn />
          </span>
          <span className="ml-2">Expenses</span>
        </Link>

        <Link
          to="/Reports"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
        >
          <span>
            <ShowChart />
          </span>
          <span className="ml-2">Reports</span>
        </Link>

        <Link
          to="/Settings"
          className="w-full flex flex-row items-center justify-start mt-4 space-y-2 space-x-6 px-5 py-2 border rounded cursor-pointer"
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

export default SidBar;
