import express from 'express';

import routes from './src/api/v1/routes';

const PORT = process.env.PORT || 5000;

// Initilalize the express app
const app = express();

// Set up middlewares
app.use(express.json());

// Setup the routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on: localhost:${PORT}`);
});
