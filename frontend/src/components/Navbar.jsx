import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="text-[#de4227] flex justify-between items-center py-2">
      <div className="text-3xl text-gray-300 font-bold font-amaranth">
        Striver's Quiz Cards
      </div>
      <div className="flex space-x-3 items-center">
        <Button>Get 1:1 Mentorship</Button>
        <Button>Admin Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
