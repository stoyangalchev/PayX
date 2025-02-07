const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoute/userRoutes"); // ✅ Correct if this is the path

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to PayX Bank API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
