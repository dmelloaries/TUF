const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(cors()); 
app.use(express.json());

// Validation schema
const flashcardSchema = z.object({
  question: z.string().min(1, "Question cannot be empty"),
  answer: z.string().min(1, "Answer cannot be empty")
});

// Create a flashcard
app.post('/flashcards', async (req, res) => {
  try {
    const validatedData = flashcardSchema.parse(req.body);
    const flashcard = await prisma.flashcard.create({
      data: validatedData,
    });
    res.json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all flashcards
app.get('/flashcards', async (req, res) => {
  const flashcards = await prisma.flashcard.findMany();
  res.json(flashcards);
});

// Update a flashcard
app.put('/flashcards/:id', async (req, res) => {
  try {
    const validatedData = flashcardSchema.parse(req.body);
    const { id } = req.params;
    const flashcard = await prisma.flashcard.update({
      where: { id: parseInt(id) },
      data: validatedData,
    });
    res.json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a flashcard
app.delete('/flashcards/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.flashcard.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Flashcard deleted' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
