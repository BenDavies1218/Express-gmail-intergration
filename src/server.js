const express = require("express");
const app = express();

// Allows Post requests to have JSON Body Content
app.use(express.json());

// Home Route
app.get("/", (request, response, next) => {
  response.json({
    message: "Hello World",
  });
});

// Send email route
const sendEmailRouter = require("./controllers/sendEmailRouter");
app.use("/sendemail", sendEmailRouter);

// 404 Handling Route
app.use((request, response) => {
  response.status(404).json({
    message: "404 Page Not Found!",
  });
});

// Error Handling Middleware
app.use((error, request, response, next) => {
  console.error(error.stack); // Log the error stack for debugging
  response.status(error.status || 500).json({
    message: "An error occurred",
    error: error.message,
  });
});

// Exporting the app
module.exports = {
  app,
};
