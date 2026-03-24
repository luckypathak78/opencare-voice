const db = require("../config/db");

// Get Logged-in User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const [users] = await db.query(
      "SELECT id, name, email, role, isVerified FROM users WHERE id = ?",
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(users[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get All Users (Admin)
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query(
      "SELECT id, name, email, role, isVerified FROM users"
    );

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Verify User (Moderator/Admin Feature)
exports.verifyUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await db.query(
      "UPDATE users SET isVerified = ? WHERE id = ?",
      [true, userId]
    );

    res.json({ message: "User verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update User Role (Optional)
exports.updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    await db.query(
      "UPDATE users SET role = ? WHERE id = ?",
      [role, userId]
    );

    res.json({ message: "User role updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};