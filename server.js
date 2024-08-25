const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: "Invalid input: data must be an array" });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets
    .filter(char => char.length === 1 && char.toLowerCase() !== char.toUpperCase())
    .reduce((max, char) => char.toLowerCase() > max.toLowerCase() ? char : max, 'a');

  const response = {
    is_success: true,
    user_id: "Varun2003", // Replace with your user ID
    email: "jvarunharish.gulati2021@vit.student.ac.in", // Replace with your email
    roll_number: "21BCE2979", // Replace with your roll number
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : []
  };

  res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));