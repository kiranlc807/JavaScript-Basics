const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON data in the request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Aggregation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

// Define a sample schema
const EmployeeSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

const Employee = mongoose.model('EmployeeDemo', EmployeeSchema);

// Example API route for aggregation
app.get('/api/aggregation', async (req, res) => {
  try {
    const result = await Employee.aggregate([

        // size 
        // {$count:"name"}
      
        //grouping based on age and pushing there name
        // {$group: {_id: '$age', names:{$push:"$name"}}},

        //matching based on gender and grouping on age and retriving all the details
        // {$match:{gender:"male"}},{$group:{_id:"$age",details:{$push:"$$ROOT"}}}

        //give a count per age of female employee
        // {$match:{gender:"female"}},{$group:{_id:"$age",count:{$sum:1}}}

        //count per age of male employee and sort them by count in desc manner
        // {$match:{gender:"male"}},{$group:{_id:"$age",count:{$sum:1}}},{$sort:{count:-1}}

        //all details of the female employee by there age 
        // {$match:{gender:"female"}},{$group:{_id:"$age",details:{$push:"$$ROOT"}}}

        //average of the age 
        // {$group:{_id:null,averageAge:{$avg:"$age"}}}
      
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/aggregation', async (req, res) => {
  try {
    console.log('Body', req.body);
    const result = await Employee.create(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

