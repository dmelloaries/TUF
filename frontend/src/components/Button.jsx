import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-transparent text-[#de4227] border border-gray-500 rounded-full py-2 px-4 hover:bg-gray-900 hover:border-gray-400 rounded-2xl">
      {children}
    </button>
  );
};

export default Button;
