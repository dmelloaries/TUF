import React, { useState } from 'react';
import Flashcard from './FlashCard';

const flashcards = [
  { question: 'What is an Array?', answer: 'A data structure for storing elements of the same type.' },
  { question: 'What is DSA?', answer: 'Data Structures and Algorithms.' },
  { question: 'What is Binary Search?', answer: 'Efficient searching algorithm for sorted arrays.' },
];

const FlashCardSet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
      />
      <div className="flex space-x-4">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashCardSet;
