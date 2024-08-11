import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });
  const [editingFlashcard, setEditingFlashcard] = useState(null);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('https://tuf-4.onrender.com/flashcards');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingFlashcard) {
      setEditingFlashcard({ ...editingFlashcard, [name]: value });
    } else {
      setNewFlashcard({ ...newFlashcard, [name]: value });
    }
  };

  const handleAddFlashcard = async () => {
    try {
      await axios.post('https://tuf-4.onrender.com/flashcards', newFlashcard);
      fetchFlashcards();
      setNewFlashcard({ question: '', answer: '' });
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  const handleEditFlashcard = (flashcard) => {
    setEditingFlashcard(flashcard);
  };

  const handleUpdateFlashcard = async () => {
    try {
      await axios.put(`https://tuf-4.onrender.com/flashcards/${editingFlashcard.id}`, editingFlashcard);
      fetchFlashcards();
      setEditingFlashcard(null);
    } catch (error) {
      console.error('Error updating flashcard:', error);
    }
  };

  const handleDeleteFlashcard = async (id) => {
    try {
      await axios.delete(`https://tuf-4.onrender.com/flashcards/${id}`);
      fetchFlashcards();
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  return (
    <div className="p-4 text-gray-300 font-bold font-amaranth">
      <br />
      <br />

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add New Flashcard</h2>
        <input 
          className="border p-3 mr-2 text-black"
          type="text"
          name="question"
          placeholder="Question"
          value={newFlashcard.question}
          onChange={handleInputChange}
        />
        <input
          className="border p-3 mr-2 text-black"
          type="text"
          name="answer"
          placeholder="Answer"
          value={newFlashcard.answer}
          onChange={handleInputChange}
        />
        <button className="bg-green-600 text-white p-3 rounded-lg lg" onClick={handleAddFlashcard}>
          Add Flashcard
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Flashcards List</h2>
        {flashcards.map((flashcard) => (
          <div key={flashcard.id} className="mb-4 border p-4 rounded-lg">
            {editingFlashcard && editingFlashcard.id === flashcard.id ? (
              <div>
                <input
                  className="border p-3 mr-2 text-black"
                  type="text"
                  name="question"
                  value={editingFlashcard.question}
                  onChange={handleInputChange}
                />
                <input
                  className="border p-3 mr-2 text-black"
                  type="text"
                  name="answer"
                  value={editingFlashcard.answer}
                  onChange={handleInputChange}
                />
                <button className="bg-blue-600 text-white p-3 mr-2 rounded-lg lg" onClick={handleUpdateFlashcard}>
                  Update
                </button>
                <button className="bg-gray-600 text-white p-3 rounded-lg lg" onClick={() => setEditingFlashcard(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p><strong>Question:</strong> {flashcard.question}</p>
                <p><strong>Answer:</strong> {flashcard.answer}</p>
                <button className="bg-yellow-600 text-white p-3 mr-2 rounded-lg lg" onClick={() => handleEditFlashcard(flashcard)}>
                  Edit
                </button>
                <button className="bg-red-600 text-white p-3 rounded-lg lg" onClick={() => handleDeleteFlashcard(flashcard.id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
