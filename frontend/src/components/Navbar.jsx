import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="text-[#de4227] flex justify-between items-center py-2">
      <div className="text-3xl text-gray-300 font-bold font-amaranth">
        Striver's Quiz Cards
      </div>

      <div className="flex space-x-3 items-center">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        {/* <Button>Get 1:1 Mentorship</Button> */}

        <Link to="/admin">
          <Button>Admin Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
