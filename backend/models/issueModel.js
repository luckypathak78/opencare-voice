const db = require("../config/db");

const createIssue = (issue, callback) => {
  const sql = "INSERT INTO issues (hospital, description, image) VALUES (?, ?, ?)";

  db.query(sql, [issue.hospital, issue.description, issue.image], callback);
};

const getAllIssues = (callback) => {
  const sql = "SELECT * FROM issues";

  db.query(sql, callback);
};

module.exports = {
  createIssue,
  getAllIssues
};