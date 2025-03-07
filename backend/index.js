const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());

app.get("/api/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
