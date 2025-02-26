import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOfflineStatus from "../utils/useOfflineStatus";
import Usercontext from "../utils/UserContext";
import { useContext } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const status = useOfflineStatus();
  const { loggedInUser } = useContext(Usercontext);
  // console.log(loggedInUser);

  return (
    <div className="flex h-[100] bg-gray-300 text-black shadow-xl p-4 justify-between  items-center">
      <div className="logo-container">
        <img className="w-[100] shadow rounded-3xl" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-6">
          <h4>{status ? "🟢 Online" : "🔴 Offline"}</h4>
          <li className="hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/About">About US</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/Contact">Contact US</Link>
          </li>
          <li className="hover:text-blue-500">Cart</li>
          <button
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
            }}
            className="Login-btn"
          >
            {btnName}
          </button>
          <li className="hover:text-blue-500">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
