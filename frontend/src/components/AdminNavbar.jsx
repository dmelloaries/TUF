import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const AdminNavbar = () => {
  return (
    <div className="text-[#de4227] flex justify-between items-center py-2">
      <div className="text-3xl text-gray-300 font-bold font-amaranth">
        Admin Portal
      </div>

      <div className="flex space-x-3 items-center">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        {/* <Button>Get 1:1 Mentorship</Button> */}

        
      </div>
    </div>
  );
};

export default AdminNavbar;
