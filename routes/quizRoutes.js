const express = require('express');
const { createQuiz, getQuizById } = require('../controllers/quizController.js');
const router = express.Router();

router.post('/quiz', createQuiz);   // Route to create a new quiz
router.get('/quiz/:id', getQuizById);   // Route to fetch quiz by id

module.exports = router;  // Make sure you're exporting the router