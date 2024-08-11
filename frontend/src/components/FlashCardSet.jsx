import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCard from './FlashCard';

const FlashCardSet = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('https://tuf-4.onrender.com/flashcards');
        setFlashcards(response.data);
        setLoading(false);
      } catch (e) {
        setError('Failed to fetch flashcards.');
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (flashcards.length === 0) {
    return <div>No flashcards available.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <FlashCard
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
