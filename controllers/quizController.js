const Quiz = require('../models/Quiz');

// Create a new quiz
const createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const newQuiz = new Quiz({ title, questions });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQuiz, getQuizById };