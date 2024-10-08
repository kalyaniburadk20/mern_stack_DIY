const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5928;

app.use(cors());
app.use(express.json());

// Sample quiz data stored in memory
let quizzes = [];

// Endpoint to get quiz data
app.get('/api/quizzes', (req, res) => {
    res.json(quizzes);
});

// Endpoint to create a new quiz
app.post('/api/quizzes', (req, res) => {
    const { title, questions } = req.body;
    const newQuiz = {
        id: quizzes.length + 1,
        title,
        questions,
    };
    quizzes.push(newQuiz);
    res.status(201).json(newQuiz);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});