const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Process data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets
        .filter(char => char.toLowerCase() === char)
        .sort((a, b) => b.localeCompare(a))[0] || [];

    // Construct response
    const response = {
        is_success: true,
        user_id: "varun_h_gulati@gmail.com",
        email: "vit_v@gmail.com",
        roll_number: "12111256",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));