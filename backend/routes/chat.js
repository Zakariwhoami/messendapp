const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Create a new conversation
router.post("/conversations", (req, res) => {
    const query = "INSERT INTO conversations () VALUES ()";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ conversationId: results.insertId });
    });
});

// Get messages by conversation ID
router.get("/messages/:conversationId", (req, res) => {
    const { conversationId } = req.params;
    const query = "SELECT * FROM messages WHERE conversation_id = ?";
    db.query(query, [conversationId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

// Send a new message
router.post("/messages", (req, res) => {
    const { conversationId, senderId, content } = req.body;
    const query = "INSERT INTO messages (conversation_id, sender_id, content) VALUES (?, ?, ?)";
    db.query(query, [conversationId, senderId, content], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Message sent successfully." });
    });
});

module.exports = router;
