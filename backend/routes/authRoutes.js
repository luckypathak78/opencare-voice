const express = require("express");
const router = express.Router();
const db = require("../config/db");
const jwt = require("jsonwebtoken");

// Register user

  router.post("/register", (req, res) => {
  const nameClean = req.body.name.trim();
  const emailClean = req.body.email.trim().toLowerCase();
  const passwordClean = req.body.password.trim();
  
console.log("Register hit:", nameClean, emailClean);
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
db.query(query, [nameClean, emailClean, passwordClean], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  });
});

router.post("/login", (req, res) => {
  const emailClean = req.body.email.trim().toLowerCase();
  const passwordClean = req.body.password.trim();

  const query = "SELECT * FROM users WHERE email = ?";

  db.query(query, [emailClean], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result[0];

    if (user.password !== passwordClean) {
      return res.status(400).json({ message: "Invalid password" });
    }

    //  remove password
    delete user.password;

    // create token
    const token = jwt.sign(
  { id: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

    res.json({
      message: "Login successful",
      token,
      user,
    });
  });
});

module.exports = router;