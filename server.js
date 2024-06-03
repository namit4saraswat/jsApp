const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/tests', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the User model
const User = mongoose.model('User', { name: String });

// Initialize Express
const app = express();
app.use(bodyParser.json());

// Create a POST endpoint for adding a new user
app.post('/users', async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.send(user);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));