const authRoutes = require("./routes/authRoutes");
const issueRoutes = require("./routes/issueRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // import the db connection
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/issues", issueRoutes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});