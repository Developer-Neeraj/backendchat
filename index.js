const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
// Add this middleware to parse JSON bodies
app.use(express.json());
dotenv.config(); 

const auth = require('./modules/auth/routes/auth');

app.use('/api/auth', auth);

// Connect to MongoDB
console.log(process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));