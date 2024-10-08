const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number, // index of the correct option
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);