const express = require("express");
const cors = require("cors");
const quotes = require("./quotes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Get all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// ✅ Get a random quote
app.get("/api/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Motivational Quotes API running on port ${PORT}`);
});
