const db = require("../config/db");

module.exports = async (req, res, next) => {
  try {
    const [users] = await db.query(
      "SELECT isVerified FROM users WHERE id = ?",
      [req.user.id]
    );

    if (!users[0].isVerified) {
      return res.status(403).json({
        message: "Only verified users can perform this action",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};