import React, { useState } from 'react';

const FlashCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-80 h-48 perspective font-amaranth"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-[#222] text-white flex items-center justify-center backface-hidden rounded-xl shadow-lg border border-transparent hover:border-[#de4227] hover:text-[#de4227]"
        >
          <p className="text-xl font-bold">Question: What is an Array?</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center transform rotate-y-180 backface-hidden rounded-xl shadow-lg">
          <p className="text-xl font-bold">Answer: A data structure for storing elements of the same type.</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
