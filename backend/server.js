const express = require("express");
const cors = require("cors");

const app = express();

/* ✅ CORS CONFIGURATION */
app.use(cors({
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

/* ✅ BODY PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ DATABASE */
const db = require("./app/models");

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

/* ✅ ROOT ROUTE */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tutorial API" });
});

/* ✅ API ROUTES */
require("./app/routes/tutorial.routes")(app);

/* ✅ SERVER */
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});