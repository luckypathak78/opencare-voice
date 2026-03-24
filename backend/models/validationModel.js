const db = require("../config/db");

//Add Validation (Upvote)
exports.addValidation = async (userId, issueId) => {
  // Check if already validated
  const [existing] = await db.query(
    "SELECT * FROM validations WHERE userId = ? AND issueId = ?",
    [userId, issueId]
  );

  if (existing.length > 0) {
    throw new Error("You already validated this issue");
  }

  const [result] = await db.query(
    "INSERT INTO validations (userId, issueId) VALUES (?, ?)",
    [userId, issueId]
  );

  return result;
};

//Remove Validation
exports.removeValidation = async (userId, issueId) => {
  await db.query(
    "DELETE FROM validations WHERE userId = ? AND issueId = ?",
    [userId, issueId]
  );
};

//Count Validations for an Issue
exports.getValidationCount = async (issueId) => {
  const [rows] = await db.query(
    "SELECT COUNT(*) AS count FROM validations WHERE issueId = ?",
    [issueId]
  );

  return rows[0].count;
};

// Get Users Who Validated an Issue
exports.getValidationsByIssue = async (issueId) => {
  const [rows] = await db.query(
    "SELECT userId FROM validations WHERE issueId = ?",
    [issueId]
  );

  return rows;
};