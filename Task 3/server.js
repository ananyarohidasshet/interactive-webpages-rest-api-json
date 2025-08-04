console.log("✅ Node is running");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint
app.post("/greet", (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello ${name}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
 