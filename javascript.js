const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Dummy user data (replace this with a real database)
const users = [
  { username: 'customer', password: 'password', role: 'customer' },
  { username: 'maid', password: 'password', role: 'maid' }
];

// Login endpoint for customers
app.post('/customer-login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password && user.role === 'customer');
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Login endpoint for maids
app.post('/maid-login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password && user.role === 'maid');
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
