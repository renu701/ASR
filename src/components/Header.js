import { useState } from "react";
import { Logo_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");
  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-24 sm:w-16" src={Logo_URL}></img>
      </div>
      <div className="hidden sm:flex items-center md:block">
        <ul className="flex p-2 m-2">
          <li className="px-4">
            <Link to="/api-docs">API Docs</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-sales">Contact sales</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
