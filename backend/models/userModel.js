const db = require("../config/db");

//Create User
exports.createUser = async (name, email, password) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, role, isVerified) VALUES (?, ?, ?, ?, ?)",
    [name, email, password, "user", false]
  );
  return result;
};

//Find User by Email
exports.findUserByEmail = async (email) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
};

//Find User by ID
exports.findUserById = async (id) => {
  const [rows] = await db.query(
    "SELECT id, name, email, role, isVerified FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
};

//Get All Users
exports.getAllUsers = async () => {
  const [rows] = await db.query(
    "SELECT id, name, email, role, isVerified FROM users"
  );
  return rows;
};

//Verify User
exports.verifyUser = async (userId) => {
  await db.query(
    "UPDATE users SET isVerified = ? WHERE id = ?",
    [true, userId]
  );
};

//Update User Role
exports.updateUserRole = async (userId, role) => {
  await db.query(
    "UPDATE users SET role = ? WHERE id = ?",
    [role, userId]
  );
};