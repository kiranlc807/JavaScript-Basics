// app.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/aggregationDemo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const User = mongoose.model('User', UserSchema);

// Add some sample data
// User.create([
//   { name: 'John', age: 30, city: 'New York' },
//   { name: 'Alice', age: 25, city: 'San Francisco' },
//   { name: 'Bob', age: 35, city: 'Los Angeles' },
// ]);

// Perform MongoDB aggregation
app.get('/aggregate', async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: '$city',
          totalAge: { $sum: '$age' },
          averageAge: { $avg: '$age' },
          count: { $sum: 1 },
        }
      },
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/sort',async (req, res) => {
  try {
    const result = await User.aggregate([
      {
       $sort:{age:1}, //-1 for desending order
        
      },
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/match',async (req, res) => {
  try {
    const result = await User.aggregate([
      {
       $match:{age:{$gte : 30 }}, 
        
      },
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
