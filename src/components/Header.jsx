import Search from "antd/es/transfer/search";
import {
  BarChartOutlined,
  FileTextOutlined,
  HomeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-8 flex justify-between items-center md:gap-8 gap-4">
        <div className="logo">
          <Link to="/" className="text-2xl md:text-4xl font-bold">
            LOGO
          </Link>
        </div>
        <div className="header-search flex-1 max-w-[800px]">
          <Search placeholder="search..." loading enterButton />
        </div>
        <div className="menu-links flex md:justify-center justify-evenly items-center md:gap-8 gap-2 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link
            to="/"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <HomeOutlined className=" md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge count={5} className="md:flex hidden">
            <Link
              to="/cart"
              className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
            >
              <ShoppingCartOutlined className=" md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
          <Link
            to="/invoice"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <FileTextOutlined className=" md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Invoices</span>
          </Link>
          <Link
            to="/customers"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <UserOutlined className=" md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>
          <Link
            to="/statistics"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <BarChartOutlined className=" md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </Link>
          <Link
            to="/"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <LogoutOutlined className=" md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Logout</span>
          </Link>
        </div>
        <Badge count={5} className="md:hidden flex">
          <Link
            to="cart"
            className="flex flex-col hover:text-orange-700 transition-transform items-center md:gap-2 gap-1"
          >
            <ShoppingCartOutlined className=" text-2xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
