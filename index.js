const express = require('express');
const app = express();
const port = 8082;
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/employee.js');
const swaggerDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Swagger configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Login & Signup Application',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8082',
      },
    ],
  },
  apis: ['./swagger.js'], // Path to the Swagger API routes
};

// Middleware to destructure body
app.use(bodyParser.json());

// Generate Swagger documentation
const swaggerSpec = swaggerDoc(options);
//
// Serve Swagger documentation at /api-docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes setup
app.use('/', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
