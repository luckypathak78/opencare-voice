const express = require("express");
const router = express.Router();
const db = require("../config/db");
const authMiddleware = require("../middleware/authMiddleware");

//  Create issue
router.post("/", authMiddleware, (req, res) => {
  const { title, description, hospitalName } = req.body;
  const userId = req.user.id;

  const query =
    "INSERT INTO issues (title, description, hospitalName, createdBy) VALUES (?, ?, ?, ?)";

  db.query(query, [title, description, hospitalName, userId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      message: "Issue created successfully",
      issueId: result.insertId,
    });
  });
});

//  Get all issues
router.get("/", (req, res) => {
  const query = "SELECT * FROM issues";

  db.query(query, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(result);
  });
});

//  Get single issue
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM issues WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(result[0]);
  });
});

module.exports = router;