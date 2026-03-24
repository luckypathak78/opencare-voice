const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    // Format: Bearer token
    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};