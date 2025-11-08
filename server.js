const express = require("express");
const cors = require("cors");
const quotes = require("./quotes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Get all quotes
app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: Arial; text-align: center; margin-top: 100px;">
      <h1>🚀 Welcome to the Motivational Quotes API</h1>
      <p>✨ Your daily dose of inspiration for students and dreamers!</p>
      <p>👉 <a href="/api/quotes/random">Click here to get a random quote</a></p>
      <p>📚 Or visit <a href="/api/quotes">/api/quotes</a> to view all quotes</p>
    </div>
  `);
});

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
