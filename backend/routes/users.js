const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Register a new user
router.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    const query = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User registered successfully." });
    });
});

// Login a user
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = ? AND password_hash = ?";
    db.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Invalid credentials." });
        res.status(200).json({ message: "Login successful.", user: results[0] });
    });
});

module.exports = router;
