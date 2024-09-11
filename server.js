const express = require('express');
const path = require('path');
const app = express();

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
  res.render('content');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
