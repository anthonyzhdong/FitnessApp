const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

//middle ware
app.use(cors());
app.use(express.json());

// basic test route
app.get('/api/test', (req,res) => {
    res.json({ message: 'backend connected' });
});

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});