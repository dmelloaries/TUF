import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <div className=" text-[#de4227]">
      <div className="flex justify-center items-center py-2">
        <Button>Login</Button>
        
      </div>
      <hr className="border-gray-700" />
    </div>
  );
};

export default Navbar;
